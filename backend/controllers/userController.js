import asyncHandler from 'express-async-handler'
import getWebToken from '../utilities/getWebToken.js'
import User from '../models/userModel.js'
import { OAuth2Client } from 'google-auth-library'
import jwt from 'jsonwebtoken'

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			image: user.image,
			email: user.email,
			isAdmin: user.isAdmin,
			token: getWebToken(user._id)
		})
	} else {
		res.status(401)
		throw new Error('Invalid email or password')
	}
})

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error('User already exists')
	}

	const user = await User.create({
		name,
		email,
		password
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			image: user.image,
			email: user.email,
			isAdmin: user.isAdmin,
			token: getWebToken(user._id)
		})
	} else {
		res.status(400)
		throw new Error('Invalid user data')
	}
})

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		res.json({
			_id: user._id,
			image: user.image,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id)

	if (user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		user.image = req.body.image || user.image

		if (req.body.password) {
			user.password = req.body.password
		}

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			image: updatedUser.image,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin,
			token: getWebToken(updatedUser._id)
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

const getUsers = asyncHandler(async (req, res) => {
	const users = await User.find({})

	res.json(users)
})

const deleteUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)

	if (user) {
		await user.remove()
		res.json({ message: 'User deleted' })
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select('-password')

	if (user) {
		res.json(user)
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

const updateUser = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id)

	if (user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		user.isAdmin = req.body.isAdmin

		const updatedUser = await user.save()

		res.json({
			_id: updatedUser._id,
			name: updatedUser.name,
			image: user.image,
			email: updatedUser.email,
			isAdmin: updatedUser.isAdmin
		})
	} else {
		res.status(404)
		throw new Error('User not found')
	}
})

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

const googleLogin = (req, res) => {
	const { idToken } = req.body
	console.log(req.body)

	client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID }).then((response) => {
		const { email_verified, name, email } = response.payload
		if (email_verified) {
			User.findOne({ email }).exec((error, user) => {
				if (user) {
					const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
					const { _id, email, name, image, isAdmin } = user
					return res.json({
						user: { _id, email, name, image, isAdmin, token: getWebToken(user._id) }
					})
				} else {
					let password = email + process.env.JWT_SECRET
					user = new User({ name, email, password })
					user.save((error, data) => {
						if (error) {
							console.log('ERROR GOOGLE LOGIN ON USER SAVE', error)
							return res.status(400).json({
								error: 'User signup failed with google'
							})
						}
						const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET, { expiresIn: '7d' })
						const { _id, email, name, image, isAdmin } = data
						return res.json({
							user: { _id, email, name, image, isAdmin, token: getWebToken(user._id) }
						})
					})
				}
			})
		} else {
			return res.status(400).json({
				error: 'Google login failed. Try again'
			})
		}
	})
}

export {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser,
	googleLogin
}
