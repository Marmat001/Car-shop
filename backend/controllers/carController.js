import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'

const getAllCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	res.json(cars)
})

const getCarBrands = asyncHandler(async (req, res) => {
	const brand = await Car.find({ brand: req.params.brand })
	if (brand) {
		res.json(brand)
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

const deleteCar = asyncHandler(async (req, res) => {
	const car = await Car.find({ model: req.params.model })
	if (car) {
		await car[0].remove()
		res.json({ message: 'Car removed from magazine' })
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

export { getAllCars, getCarBrands, getCarModel, deleteCar }
