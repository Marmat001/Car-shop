import asyncHandler from 'express-async-handler'
import Car from '../models/carModel.js'

const getAllCars = asyncHandler(async (req, res) => {
	const word = req.query.word
		? {
				name: {
					$regex: req.query.word,
					$options: 'i'
				}
			}
		: {}

	const cars = await Car.find({ ...word })
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
		res.json(car[0])
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

const addNewCar = asyncHandler(async (req, res) => {
	const car = new Car({
		name: 'Sample name',
		price: 0,
		user: req.user._id,
		image: '/images/sample.jpg',
		model: 'Sample model',
		brand: 'Sample brand',
		category: 'Sample category',
		countInStock: 0,
		reviewAmount: 0,
		description: 'Sample description'
	})

	const addedCar = await car.save()
	res.status(201).json(addedCar)
})

const updateCarInfo = asyncHandler(async (req, res) => {
	const { name, price, description, image, model, brand, category, countInStock } = req.body

	const car = await Car.findById(req.params.id)

	if (car) {
		car.name = name
		car.price = price
		car.description = description
		car.image = image
		car.model = model
		car.brand = brand
		car.category = category
		car.countInStock = countInStock

		const updatedCar = await car.save()
		res.json(updatedCar)
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

const createNewReview = asyncHandler(async (req, res) => {
	const { rating, comment } = req.body

	const car = await Car.findById(req.params.id)

	if (car) {
		const reviewedAlready = car.reviews.find((r) => r.user.toString() === req.user._id.toString())

		if (reviewedAlready) {
			res.status(400)
			throw new Error('Car already reviewed')
		}

		const review = {
			name: req.user.name,
			rating: Number(rating),
			comment,
			user: req.user._id
		}

		car.reviews.push(review)

		car.reviewAmount = car.reviews.length

		car.rating = car.reviews.reduce((acc, currval) => currval.rating + acc, 0) / car.reviews.length

		await car.save()
		res.status(201).json({ message: 'Review Added' })
	} else {
		res.status(404)
		throw new Error('Car not found')
	}
})

export { getAllCars, getCarBrands, getCarModel, deleteCar, addNewCar, updateCarInfo, createNewReview }
