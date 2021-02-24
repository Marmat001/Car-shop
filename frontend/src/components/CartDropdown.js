import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cartActions'
import CartItem from './CartItem'

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
			<div className='cart-items'>{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
			<button className='custombutton' onClick={onClickHandler}>
				GO TO CHECKOUT
			</button>
		</div>
	)
}

export default CartDropdown
