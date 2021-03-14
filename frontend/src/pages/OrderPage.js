import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import CustomTitle from '../components/CustomTitle'

const OrderPage = ({ history }) => {
	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)

	if (!cart.shippingAddress.address) {
		history.push('/shipping')
	} else if (!cart.paymentMethod) {
		history.push('/payment')
	}

	cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	cart.shippingPrice = cart.itemsPrice * 0.02
	cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(0))
	cart.totalPrice = Number(cart.itemsPrice) + Number(cart.taxPrice) + Number(cart.shippingPrice)
	cart.preliminaryPrice = Number(cart.itemsPrice) + Number(cart.taxPrice)

	const orderCreate = useSelector((state) => state.orderCreate)
	const { order, success, error } = orderCreate

	useEffect(
		() => {
			if (success) {
				history.push(`/order/${order._id}`)
				dispatch({ type: 'USER_DETAILS_RESET' })
				dispatch({ type: 'ORDER_CREATE_RESET' })
			}
		}, // eslint-disable-next-line
		[ history, success ]
	)

	const placeOrderHandler = () => {
		dispatch(
			createOrder({
				orderItems: cart.cartItems,
				shippingAddress: cart.shippingAddress,
				paymentMethod: cart.paymentMethod,
				itemsPrice: cart.itemsPrice,
				shippingPrice: cart.shippingPrice,
				taxPrice: cart.taxPrice,
				totalPrice: cart.totalPrice
			})
		)
	}

	return (
		<div>
			<CustomTitle title='Order Summary' />
			<CheckoutSteps step1 step2 step3 step4 />
			<Row>
				<Col md={8}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Address: </strong>
								{cart.shippingAddress.address}, {cart.shippingAddress.city} {cart.shippingAddress.postalCode},{' '}
								{cart.shippingAddress.country}
							</p>
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Payment Method</h2>
							<strong>Method: </strong>
							{cart.paymentMethod}
						</ListGroup.Item>

						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Your cart is empty</Message>
							) : (
								<ListGroup variant='flush'>
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
													<Image src={item.image} alt={item.name} fluid rounded />
												</Col>
												<Col>
													<Link to={`/vehicles/${item.brand}/${item.car}`}>{item.name}</Link>
												</Col>
												<Col md={4}>
													{item.qty} x ${item.price} = ${item.qty * item.price}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${cart.itemsPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Shipping</Col>
									<Col>Information on inquiry</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Tax</Col>
									<Col>${cart.taxPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Total</Col>
									<Col>${cart.preliminaryPrice.toFixed(0)}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>{error && <Message variant='danger'>{error}</Message>}</ListGroup.Item>
							<ListGroup.Item>
								<button
									className='btn btn-block homebutton'
									type='button'
									disabled={cart.cartItems === 0}
									onClick={placeOrderHandler}
								>
									Place Order
								</button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default OrderPage
