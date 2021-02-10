import express from 'express'
const router = express.Router()
import {
	getBmwCars,
	getMercedesCars,
	getAudiCars,
	getMclarenCars,
	getFerrariCars,
	getLamborghiniCars,
	getCarModel
} from '../controllers/carController.js'

router.route('/bmw').get(getBmwCars)

router.route('/mercedes').get(getMercedesCars)

router.route('/audi').get(getAudiCars)

router.route('/mclaren').get(getMclarenCars)

router.route('/ferrari').get(getFerrariCars)

router.route('/lamborghini').get(getLamborghiniCars)

router.route('/:brand/:model').get(getCarModel)

export default router
