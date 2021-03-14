import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CustomTitle from '../components/CustomTitle'

const CheckoutPage = ({ history }) => {
	const dispatch = useDispatch()

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

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
							<ListGroup.Item className='bg-transparent' key={item.car}>
								<Row>
									<Col md={2}>
										<Image src={item.image} alt={item.name} fluid rounded />
									</Col>
									<Col md={3}>
										<Link to={`/vehicles/${item.brand}/${item.car}`}>{item.name}</Link>
									</Col>
									<Col md={2}>${item.price}</Col>
									<Col md={2}>
										<select
											className='input-field'
											value={item.qty}
											onChange={(e) => dispatch(addToCart(item.car, item.brand, Number(e.target.value)))}
										>
											{[ ...Array(item.countInStock).keys() ].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
									</Col>
									<Col md={2}>
										<Button type='button' variant='danger' onClick={() => removeFromCartHandler(item.car)}>
											<i className='fas fa-trash-alt' />
										</Button>
									</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				)}
			</Col>
			<Col md={4}>
				<Card className='bg-transparent'>
					<ListGroup variant='flush'>
						<ListGroup.Item className='bg-transparent'>
							<h2>Subtotal ({cartItems.reduce((acc, currVal) => acc + currVal.qty, 0)}) items</h2>
							${cartItems.reduce((acc, currVal) => acc + currVal.qty * currVal.price, 0).toFixed(0)}
						</ListGroup.Item>
						<ListGroup.Item className='bg-transparent'>
							<button
								type='button'
								className='btn-block homebutton'
								disabled={cartItems.length === 0}
								onClick={checkOutHandler}
							>
								Proceed To Checkout
							</button>
						</ListGroup.Item>
					</ListGroup>
				</Card>
			</Col>
		</Row>
	)
}

export default CheckoutPage
