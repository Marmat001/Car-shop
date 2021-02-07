import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listFerrariCars } from '../actions/carActions'

const FerrariPage = () => {
	const dispatch = useDispatch()

	const ferrariList = useSelector((state) => state.ferrariList)
	const { loading, error, cars } = ferrariList

	useEffect(
		() => {
			dispatch(listFerrariCars())
		},
		[ dispatch ]
	)

	return (
		<div>
			<h2 className='py-3'>Ferrari</h2>
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

export default FerrariPage
