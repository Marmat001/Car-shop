import React from 'react'
import { ReactComponent as ShoppingIcon } from '../img/cartIcon.svg'
import { useSelector } from 'react-redux'

const CartIcon = () => {
	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	return (
		<div className='cart-icon'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{cartItems.length}</span>
		</div>
	)
}

export default CartIcon
