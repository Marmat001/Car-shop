import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listAllCars } from '../actions/carActions'
import Paginate from '../components/Paginate'

const SearchPage = ({ match }) => {
	const word = match.params.word

	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const carList = useSelector((state) => state.carList)
	const { loading, error, cars, page, pages } = carList

	useEffect(
		() => {
			if (word) {
				dispatch(listAllCars(word, pageNumber))
			} else {
				dispatch({ type: 'CAR_LIST_RESET' })
			}
		},
		[ dispatch, word, pageNumber ]
	)

	console.log(cars)

	return (
		<div>
			<h2 className='py-3'>Searched Cars</h2>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<Row>
						{cars.map((car) => (
							<Col key={car._id} sm={12} md={6} lg={4}>
								<CarPreview car={car} />
							</Col>
						))}
					</Row>
				</div>
			)}
			<Paginate pages={pages} page={page} word={word ? word : ''} />
		</div>
	)
}

export default SearchPage