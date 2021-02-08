import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'

const getBmwCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const bmw = await [ cars[0], cars[1], cars[2], cars[3], cars[4], cars[5] ]
	res.json(bmw)
})

const getBmwModel = asyncHandler(async (req, res) => {
	const bmw = await Car.find({ model: req.params.model })
	if (bmw.length) {
		res.json(bmw)
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

const getMercedesCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const mercedes = await [ cars[6], cars[7], cars[8], cars[9], cars[10], cars[11] ]
	res.json(mercedes)
})

const getMercedesModel = asyncHandler(async (req, res) => {
	const mercedes = await Car.find({ model: req.params.model })
	if (mercedes.length) {
		res.json(mercedes)
	} else {
		res.status(404).json({ message: 'Car not found' })
	}
})

const getAudiCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const audi = await [ cars[12], cars[13], cars[14], cars[15], cars[16], cars[17] ]
	res.json(audi)
})

const getAudiModel = asyncHandler(async (req, res) => {
	const audi = await Car.find({ model: req.params.model })
	if (audi.length) {
		res.json(audi)
	} else {
		res.status(404).json({ message: 'Car not found' })
	}
})

const getMclarenCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const mclaren = await [ cars[18], cars[19], cars[20] ]
	res.json(mclaren)
})

const getMclarenModel = asyncHandler(async (req, res) => {
	const mclaren = await Car.find({ model: req.params.model })
	if (mclaren.length) {
		res.json(mclaren)
	} else {
		res.status(404).json({ message: 'Car not found' })
	}
})

const getFerrariCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const ferrari = await [ cars[21], cars[22], cars[23] ]
	res.json(ferrari)
})

const getFerrariModel = asyncHandler(async (req, res) => {
	const ferrari = await Car.find({ model: req.params.model })
	if (ferrari.length) {
		res.json(ferrari)
	} else {
		res.status(404).json({ message: 'Car not found' })
	}
})

const getLamborghiniCars = asyncHandler(async (req, res) => {
	const cars = await Car.find({})
	const lamborghini = await [ cars[24], cars[25], cars[26] ]
	res.json(lamborghini)
})

const getLamborghiniModel = asyncHandler(async (req, res) => {
	const lamborghini = await Car.find({ model: req.params.model })
	if (lamborghini.length) {
		res.json(lamborghini)
	} else {
		res.status(404).json({ message: 'Car not found' })
	}
})

export {
	getBmwCars,
	getBmwModel,
	getMercedesCars,
	getMercedesModel,
	getAudiCars,
	getAudiModel,
	getMclarenCars,
	getMclarenModel,
	getFerrariCars,
	getFerrariModel,
	getLamborghiniCars,
	getLamborghiniModel
}
