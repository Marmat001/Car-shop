import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as ShoppingIcon } from '../img/cartIcon.svg'

const CartIcon = () => {
	const dispatch = useDispatch()

	return (
		<div className='cart-icon'>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	)
}

export default CartIcon
