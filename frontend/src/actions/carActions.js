import axios from 'axios'

export const listBmwCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'BMW_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/bmw')

		dispatch({ type: 'BMW_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'BMW_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listMercedesCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'MERCEDES_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/mercedes')

		dispatch({ type: 'MERCEDES_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'MERCEDES_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listAudiCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'AUDI_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/audi')

		dispatch({ type: 'AUDI_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'AUDI_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listMclarenCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'MCLAREN_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/mclaren')

		dispatch({ type: 'MCLAREN_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'MCLAREN_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listFerrariCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'FERRARI_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/ferrari')

		dispatch({ type: 'FERRARI_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'FERRARI_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listLamborghiniCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'LAMBORGHINI_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles/lamborghini')

		dispatch({ type: 'LAMBORGHINI_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'LAMBORGHINI_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listCarDetails = (brand, model) => async (dispatch) => {
	try {
		dispatch({ type: 'CAR_DETAILS_REQUEST' })

		const { data } = await axios.get(`/api/vehicles/${brand}/${model}`)
		dispatch({ type: 'CAR_DETAILS_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'CAR_DETAILS_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}
