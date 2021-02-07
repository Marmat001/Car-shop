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

const reducer = combineReducers({
	bmwList: bmwReducer,
	mercedesList: mercedesReducer,
	audiList: audiReducer,
	mclarenList: mclarenReducer,
	ferrariList: ferrariReducer,
	lamborghiniList: lamborghiniReducer,
	carDetails: carDetailReducer
})

const intitialState = {}

const middleware = [ thunk ]

const store = createStore(reducer, intitialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
