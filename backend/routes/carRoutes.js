import express from 'express'
const router = express.Router()
import { getAllCars, getCarBrands, getCarModel, deleteCar } from '../controllers/carController.js'
import { secure, admin } from '../middleware/authenticationMiddleware.js'

router.route('/').get(getAllCars)

router.route('/:brand').get(getCarBrands)

router.route('/:brand/:model').get(getCarModel).delete(secure, admin, deleteCar)

export default router
