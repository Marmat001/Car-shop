import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	addCarReducer,
	carBrandReducer,
	carDeleteReducer,
	carDetailReducer,
	CarReducer,
	createCarReviewReducer,
	topRatedCarReducer,
	updateCarReducer
} from './reducers/carReducers'
import { cartReducer, cartToggleReducer } from './reducers/cartReducers'
import {
	userDeleteReducer,
	userDetailsReducer,
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer,
	userUpdateReducer
} from './reducers/userReducers'
import {
	orderCreateReducer,
	orderDeliverReducer,
	orderDetailsReducer,
	orderListMyReducer,
	orderListReducer,
	orderPayReducer
} from './reducers/orderReducers'

const reducer = combineReducers({
	carList: CarReducer,
	carBrands: carBrandReducer,
	carDetails: carDetailReducer,
	cart: cartReducer,
	cartToggle: cartToggleReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderDeliver: orderDeliverReducer,
	orderListMy: orderListMyReducer,
	userList: userListReducer,
	userDelete: userDeleteReducer,
	userUpdate: userUpdateReducer,
	carDelete: carDeleteReducer,
	carAdd: addCarReducer,
	carUpdate: updateCarReducer,
	carCreateReview: createCarReviewReducer,
	orderList: orderListReducer,
	carTopRated: topRatedCarReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {}

const intitialState = {
	cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
	userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [ thunk ]

const store = createStore(reducer, intitialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
