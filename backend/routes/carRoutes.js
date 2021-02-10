import express from 'express'
const router = express.Router()
import {
	getAllCars,
	getBmwCars,
	getMercedesCars,
	getAudiCars,
	getMclarenCars,
	getFerrariCars,
	getLamborghiniCars,
	getCarModel,
	DeleteCar
} from '../controllers/carController.js'
import { secure, admin } from '../middleware/authenticationMiddleware.js'

router.route('/').get(getAllCars)

router.route('/bmw').get(getBmwCars)

router.route('/mercedes').get(getMercedesCars)

router.route('/audi').get(getAudiCars)

router.route('/mclaren').get(getMclarenCars)

router.route('/ferrari').get(getFerrariCars)

router.route('/lamborghini').get(getLamborghiniCars)

router.route('/:brand/:model').get(getCarModel).delete(secure, admin, DeleteCar)

export default router
