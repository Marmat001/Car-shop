import express from 'express'
const router = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
import { secure } from '../middleware/authenticationMiddleware.js'

router.route('/').post(secure, addOrderItems)
router.route('/:id').get(secure, getOrderById)
router.route('/:id/pay').put(secure, updateOrderToPaid)

export default router
