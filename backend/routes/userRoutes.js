import express from 'express'
const router = express.Router()
import {
	authUser,
	getUserProfile,
	registerUser,
	updateUserProfile,
	getUsers,
	deleteUser,
	getUserById,
	updateUser
} from '../controllers/userController.js'
import { secure, admin } from '../middleware/authenticationMiddleware.js'

router.route('/').post(registerUser).get(secure, admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(secure, getUserProfile).put(secure, updateUserProfile)
router.route('/:id').delete(secure, admin, deleteUser).get(secure, admin, getUserById).put(secure, admin, updateUser)

export default router
