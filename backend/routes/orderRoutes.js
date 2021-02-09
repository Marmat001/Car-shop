import express from 'express'
const router = express.Router()
import { addOrderItems } from '../controllers/orderController.js'
import { secure } from '../middleware/authenticationMiddleware.js'

router.route('/').post(secure, addOrderItems)

export default router
