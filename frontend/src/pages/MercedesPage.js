import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMercedesCars } from '../actions/carActions'

const MercedesPage = () => {
	const dispatch = useDispatch()

	const mercedesList = useSelector((state) => state.mercedesList)
	const { loading, error, cars } = mercedesList

	useEffect(
		() => {
			dispatch(listMercedesCars())
		},
		[ dispatch ]
	)

	return (
		<div>
			<h2 className='py-3'>Mercedes</h2>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					{cars.map((car) => (
						<Col key={car._id} sm={12} md={6} lg={4}>
							<CarPreview car={car} />
						</Col>
					))}
				</Row>
			)}
		</div>
	)
}

export default MercedesPage
