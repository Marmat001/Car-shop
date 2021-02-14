import express from 'express'
const router = express.Router()
import {
	getAllCars,
	getCarBrands,
	getCarModel,
	deleteCar,
	updateCarInfo,
	addNewCar,
	createNewReview
} from '../controllers/carController.js'
import { secure, admin } from '../middleware/authenticationMiddleware.js'

router.route('/').get(getAllCars).post(secure, admin, addNewCar)

router.route('/:brand').get(getCarBrands)

router.route('/:brand/:model').get(getCarModel).delete(secure, admin, deleteCar)

router.route('/:id/:model?').put(secure, admin, updateCarInfo)

router.route('/:id/:model/reviews').post(secure, createNewReview)

export default router
