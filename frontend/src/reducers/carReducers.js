export const CarReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'CAR_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'CAR_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'CAR_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const bmwReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'BMW_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'BMW_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'BMW_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const mercedesReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'MERCEDES_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'MERCEDES_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'MERCEDES_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const audiReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'AUDI_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'AUDI_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'AUDI_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const mclarenReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'MCLAREN_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'MCLAREN_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'MCLAREN_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const ferrariReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'FERRARI_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'FERRARI_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'FERRARI_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const lamborghiniReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'LAMBORGHINI_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'LAMBORGHINI_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'LAMBORGHINI_LIST_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const carDetailReducer = (state = { car: { reviews: [] } }, action) => {
	switch (action.type) {
		case 'CAR_DETAILS_REQUEST':
			return { loading: true, ...state }
		case 'CAR_DETAILS_SUCCESS':
			return { loading: false, car: action.payload }
		case 'CAR_DETAILS_FAIL':
			return { loading: false, error: action.payload }
		case 'CAR_DETAILS_CLEAR':
			return {
				...state,
				searched: [],
				loading: true
			}

		default:
			return state
	}
}

export const carDeleteReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CAR_DELETE_REQUEST':
			return { loading: true }
		case 'CAR_DELETE_SUCCESS':
			return { loading: false, success: true }
		case 'CAR_DELETE_FAIL':
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
