import axios from 'axios'

export const listCarBrands = (brand) => async (dispatch) => {
	try {
		dispatch({ type: 'BRAND_LIST_REQUEST' })

		const { data } = await axios.get(`/api/vehicles/${brand}`)

		dispatch({ type: 'BRAND_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'BRAND_LIST_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}

export const listAllCars = () => async (dispatch) => {
	try {
		dispatch({ type: 'CAR_LIST_REQUEST' })

		const { data } = await axios.get('/api/vehicles')

		dispatch({ type: 'CAR_LIST_SUCCESS', payload: data })
	} catch (error) {
		dispatch({
			type: 'CAR_LIST_FAIL',
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

export const deleteCar = (brand, model) => async (dispatch, getState) => {
	try {
		dispatch({
			type: 'CAR_DELETE_REQUEST'
		})

		const { userLogin: { userInfo } } = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`
			}
		}

		await axios.delete(`/api/vehicles/${brand}/${model}`, config)

		dispatch({
			type: 'CAR_DELETE_SUCCESS'
		})
	} catch (error) {
		dispatch({
			type: 'CAR_DELETE_FAIL',
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		})
	}
}
