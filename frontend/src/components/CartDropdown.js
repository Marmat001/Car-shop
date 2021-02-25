import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartDropdown = ({ history }) => {
	const cart = useSelector((state) => state.cart)
	const { cartItems } = cart

	const onClickHandler = () => {
		history.push('/cart')
	}

	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>{cartItems.map((cartItem) => <CartItem key={cartItem.name} item={cartItem} />)}</div>
			<button className='custombutton' onClick={onClickHandler}>
				GO TO CHECKOUT
			</button>
		</div>
	)
}

export default CartDropdown
