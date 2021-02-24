import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

const CartDropdown = ({ match, location, history }) => {
	const carModel = match.params.model
	const carBrand = match.params.brand

	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const qty = location.search ? Number(location.search.split('=')[1]) : 1

	useEffect(
		() => {
			if (carModel) {
				dispatch(addToCart(carModel, carBrand, qty))
			}
		},
		[ dispatch, carModel, qty, pathname ]
	)

	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	const removeFromCartHandler = (model) => {
		dispatch(removeFromCart(model))
	}

	const onClickHandler = () => {
		history.push('/cart')
	}

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
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
							</Row>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
			<button className='custombutton' onClick={onClickHandler}>
				GO TO CHECKOUT
			</button>
		</div>
	)
}

export default CartDropdown
