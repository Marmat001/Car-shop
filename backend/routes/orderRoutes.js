import express from 'express'
const router = express.Router()
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getMyOrders,
	getAllOrders,
	updateOrderToOutForDelivery
} from '../controllers/orderController.js'
import { secure, admin } from '../middleware/authenticationMiddleware.js'

router.route('/').post(secure, addOrderItems).get(secure, admin, getAllOrders)
router.route('/myorders').get(secure, getMyOrders)
router.route('/:id').get(secure, getOrderById)
router.route('/:id/pay').put(secure, updateOrderToPaid)
router.route('/:id/deliver').put(secure, admin, updateOrderToOutForDelivery)

export default router
