import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'

const getBmwCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const bmw = await [ cars[0], cars[1], cars[2], cars[3], cars[4], cars[5] ]
	res.json(bmw)
})

const getMercedesCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const mercedes = await [ cars[6], cars[7], cars[8], cars[9], cars[10], cars[11] ]
	res.json(mercedes)
})

const getAudiCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const audi = await [ cars[12], cars[13], cars[14], cars[15], cars[16], cars[17] ]
	res.json(audi)
})

const getMclarenCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const mclaren = await [ cars[18], cars[19], cars[20] ]
	res.json(mclaren)
})

const getFerrariCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const ferrari = await [ cars[21], cars[22], cars[23] ]
	res.json(ferrari)
})

const getLamborghiniCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const lamborghini = await [ cars[24], cars[25], cars[26] ]
	res.json(lamborghini)
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

export { getBmwCars, getMercedesCars, getAudiCars, getMclarenCars, getFerrariCars, getLamborghiniCars, getCarModel }
