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

export const carBrandReducer = (state = { cars: [] }, action) => {
	switch (action.type) {
		case 'BRAND_LIST_REQUEST':
			return { loading: true, cars: [] }
		case 'BRAND_LIST_SUCCESS':
			return { loading: false, cars: action.payload }
		case 'BRAND_LIST_FAIL':
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
				car: {}
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

export const addCarReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CAR_ADD_REQUEST':
			return { loading: true }
		case 'CAR_ADD_SUCCESS':
			return { loading: false, success: true, car: action.payload }
		case 'CAR_ADD_FAIL':
			return { loading: false, error: action.payload }
		case 'CAR_ADD_RESET':
			return {}
		default:
			return state
	}
}

export const updateCarReducer = (state = { car: [] }, action) => {
	switch (action.type) {
		case 'CAR_UPDATE_REQUEST':
			return { loading: true }
		case 'CAR_UPDATE_SUCCESS':
			return { loading: false, success: true, car: action.payload }
		case 'CAR_UPDATE_FAIL':
			return { loading: false, error: action.payload }
		case 'CAR_UPDATE_RESET':
			return { car: {} }
		default:
			return state
	}
}
