import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import shopData from './data/shopData.js'
import User from './models/userModel.js'
import Car from './models/carModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
	try {
		await Order.deleteMany()
		await Car.deleteMany()
		await User.deleteMany()

		const createdUsers = await User.insertMany(users)

		const adminUser = createdUsers[0]._id

		const carBrands = shopData.map((data) => data.cars.map((car) => car))
		const cars = [
			...carBrands[0],
			...carBrands[1],
			...carBrands[2],
			...carBrands[3],
			...carBrands[4],
			...carBrands[5]
		]

		const sampleCars = cars.map((car) => {
			return { ...car, user: adminUser }
		})

		await Car.insertMany(sampleCars)

		console.log('Data Imported!')
		process.exit()
	} catch (error) {
		console.error(`${error}`)
		process.exit(1)
	}
}

const destroyData = async () => {
	try {
		await Order.deleteMany()
		await Car.deleteMany()
		await User.deleteMany()

		console.log('Data Destroyed!')
		process.exit()
	} catch (error) {
		console.error(`${error}`)
		process.exit(1)
	}
}

if (process.argv[2] === '-d') {
	destroyData()
} else {
	importData()
}
