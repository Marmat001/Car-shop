import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = ({ item: { image, price, name, qty, brand, car } }) => (
	<Link to={`/vehicles/${brand}/${car}`} className='cart-item-dropdown'>
		<img src={image} alt='item' />
		<div className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>
				{qty} x ${price}
			</span>
		</div>
	</Link>
)

export default CartItem
