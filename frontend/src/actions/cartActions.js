import axios from 'axios'

export const addToCart = (model, brand, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/vehicles/${brand}/${model}`)

	dispatch({
		type: 'CART_ADD_ITEM',
		payload: {
			car: data.model,
			color: data.color,
			name: data.name,
			brand: data.brand,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (model) => (dispatch, getState) => {
	dispatch({
		type: 'CART_REMOVE_ITEM',
		payload: model
	})

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
	dispatch({
		type: 'CART_SAVE_SHIPPING_ADDRESS',
		payload: data
	})

	localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: 'CART_SAVE_PAYMENT_METHOD',
		payload: data
	})

	localStorage.setItem('paymentMethod', JSON.stringify(data))
}
