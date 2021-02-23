import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import {Message} from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CustomTitle from '../components/CustomTitle'

const CheckoutPage = ({ match, location, history }) => {
	const carModel = match.params.model
	const carBrand = match.params.brand

	const qty = location.search ? Number(location.search.split('=')[1]) : 1

	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	useEffect(
		() => {
			if (carModel) {
				dispatch(addToCart(carModel, carBrand, qty))
			}
		},
		[ dispatch, carModel, qty, pathname ]
	)

	const removeFromCartHandler = (model) => {
		dispatch(removeFromCart(model))
	}

	const checkOutHandler = () => {
		history.push('/login?redirect=shipping')
	}

	const onClickHandler = () => {
		history.push('/vehicles')
	}

	return (
		<Row>
			<CustomTitle title='Cart' />
			<Col md={8}>
				<h1>Shopping Cart</h1>
				{cartItems.length === 0 ? (
					<div>
						<Message className='homebutton mb-3'>Your cart is empty</Message>
						<button onClick={onClickHandler} className='homebutton'>
							View Vehicles
						</button>
					</div>
				) : (
					<ListGroup variant='flush'>
						{cartItems.map((item) => (
							<ListGroup.Item key={item.car}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/vehicles/${item.brand}/${item.car}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<Form.Control
											as='select'
											value={item.qty}
											onChange={(e) => dispatch(addToCart(item.car, item.brand, Number(e.target.value)))}
										>
											{[ ...Array(item.countInStock).keys() ].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>
									</Col>
									<Col md={2}>
										<Button type='button' variant='light' onClick={() => removeFromCartHandler(item.car)}>
											<i className='fas fa-trash' />
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>Subtotal ({cartItems.reduce((acc, currVal) => acc + currVal.qty, 0)}) items</h2>
							${cartItems.reduce((acc, currVal) => acc + currVal.qty * currVal.price, 0).toFixed(0)}
						</ListGroup.Item>
						<ListGroup.Item>
							<Button
								type='button'
								className='btn-block homebutton'
								disabled={cartItems.length === 0}
								onClick={checkOutHandler}
							>
								Proceed To Checkout
							</Button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	)
}

export default CheckoutPage
