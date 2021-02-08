import express from 'express'
const router = express.Router()
import {
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
} from '../controllers/carController.js'

router.route('/bmw').get(getBmwCars)

router.route('/bmw/:model').get(getBmwModel)

router.route('/mercedes').get(getMercedesCars)

router.route('/mercedes/:model').get(getMercedesModel)

router.route('/audi').get(getAudiCars)

router.route('/audi/:model').get(getAudiModel)

router.route('/mclaren').get(getMclarenCars)

router.route('/mclaren/:model').get(getMclarenModel)

router.route('/ferrari').get(getFerrariCars)

router.route('/ferrari/:model').get(getFerrariModel)

router.route('/lamborghini').get(getLamborghiniCars)

router.route('/lamborghini/:model').get(getLamborghiniModel)

export default router
