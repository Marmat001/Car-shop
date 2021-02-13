import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function ScrollTop() {
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	useEffect(
		() => {
			window.scroll({
				top: 0,
				left: 0
			})
			dispatch({ type: 'CAR_DETAILS_CLEAR' })
		},
		[ pathname, dispatch ]
	)
	return null
}
