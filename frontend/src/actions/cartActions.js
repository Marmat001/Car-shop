import axios from 'axios'

export const addToCart = (model, brand, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/vehicles/${brand}/${model}`)

	dispatch({
		type: 'CART_ADD_ITEM',
		payload: {
			car: data[0].model,
			name: data[0].name,
			brand: data[0].brand,
			image: data[0].image,
			price: data[0].price,
			countInStock: data[0].countInStock,
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
