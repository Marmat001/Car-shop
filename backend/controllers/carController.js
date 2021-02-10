import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'

const getAllCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	res.json(cars)
})

const getBmwCars = asyncHandler(async (req, res) => {
	const bmw = await Car.find({ brand: 'bmw' })
	if (bmw) {
		res.json(bmw)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getMercedesCars = asyncHandler(async (req, res) => {
	const mercedes = await Car.find({ brand: 'mercedes' })
	if (mercedes) {
		res.json(mercedes)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getAudiCars = asyncHandler(async (req, res) => {
	const audi = await Car.find({ brand: 'audi' })
	if (audi) {
		res.json(audi)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getMclarenCars = asyncHandler(async (req, res) => {
	const mclaren = await Car.find({ brand: 'mclaren' })
	if (mclaren) {
		res.json(mclaren)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getFerrariCars = asyncHandler(async (req, res) => {
	const ferrari = await Car.find({ brand: 'ferrari' })
	if (ferrari) {
		res.json(ferrari)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getLamborghiniCars = asyncHandler(async (req, res) => {
	const lamborghini = await Car.find({ brand: 'lamborghini' })
	if (lamborghini) {
		res.json(lamborghini)
	} else {
		res.status(404)
		throw new Error('No cars to display')
	}
})

const getCarModel = asyncHandler(async (req, res) => {
	const car = await Car.find({ model: req.params.model })
	if (car.length) {
		res.json(car)
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

const DeleteCar = asyncHandler(async (req, res) => {
	const car = await Car.find({ model: req.params.model })
	if (car) {
		await car[0].remove()
		res.json({ message: 'Car removed from magazine' })
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

export {
	getAllCars,
	getBmwCars,
	getMercedesCars,
	getAudiCars,
	getMclarenCars,
	getFerrariCars,
	getLamborghiniCars,
	getCarModel,
	DeleteCar
}
