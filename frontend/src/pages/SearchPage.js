import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import { Message } from '../components/Message'
import Loader from '../components/Loader'
import { listAllCars } from '../actions/carActions'
import Paginate from '../components/Paginate'
import CustomTitle from '../components/CustomTitle'

const SearchPage = ({ match }) => {
	const [ price, setPrice ] = useState([ 0, 0 ])

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

	return (
		<div>
			<h1 className='py-3'>Searched Cars</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<CustomTitle title='Searched Cars' />
					<div
						className='pb-5 pt-3'
						style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
					>
						<h4 className='pb-3 pr-5'>Price</h4>
						<h4 className='pr-5'>$ {price}</h4>
						<div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
							<h5 className='pr-3 pt-2'>0 $</h5>
							<input min='0' max='750500' value={price} onChange={(e) => setPrice(e.target.value)} type='range' />
							<h5 className='pl-3 pt-2'>750500 $</h5>
						</div>
					</div>

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
