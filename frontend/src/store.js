import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
	audiReducer,
	bmwReducer,
	carDetailReducer,
	ferrariReducer,
	lamborghiniReducer,
	mclarenReducer,
	mercedesReducer
} from './reducers/carReducers'
import { cartReducer } from './reducers/cartReducers'
import {
	userDetailsReducer,
	userLoginReducer,
	userRegisterReducer,
	userUpdateProfileReducer
} from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducers'

const reducer = combineReducers({
	bmwList: bmwReducer,
	mercedesList: mercedesReducer,
	audiList: audiReducer,
	mclarenList: mclarenReducer,
	ferrariList: ferrariReducer,
	lamborghiniList: lamborghiniReducer,
	carDetails: carDetailReducer,
	cart: cartReducer,
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	orderCreate: orderCreateReducer
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
