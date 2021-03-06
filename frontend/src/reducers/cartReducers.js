export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
	switch (action.type) {
		case 'CART_ADD_ITEM':
			const item = action.payload

			const existItem = state.cartItems.find((x) => x.car === item.car)

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) => (x.car === existItem.car ? item : x))
				}
			} else {
				return {
					...state,
					cartItems: [ ...state.cartItems, item ]
				}
			}

		case 'CART_REMOVE_ITEM':
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.car !== action.payload)
			}

		case 'CART_SAVE_SHIPPING_ADDRESS':
			return {
				...state,
				shippingAddress: action.payload
			}

		case 'CART_SAVE_PAYMENT_METHOD':
			return {
				...state,
				paymentMethod: action.payload
			}

		case 'CART_CLEAR_ITEMS':
			return {
				...state,
				cartItems: []
			}

		default:
			return state
	}
}

export const cartToggleReducer = (state = { hidden: true }, action) => {
	switch (action.type) {
		case 'CART_TOGGLE_HIDDEN':
			return {
				...state,
				hidden: true
			}

		case 'CART_TOGGLE_SHOW':
			return {
				...state,
				hidden: false
			}
		default:
			return state
	}
}
