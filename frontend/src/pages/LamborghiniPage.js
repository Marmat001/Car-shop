import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import {Message} from '../components/Message'
import Loader from '../components/Loader'
import { listCarBrands } from '../actions/carActions'
import CustomTitle from '../components/CustomTitle'

const LamborghiniPage = () => {
	const dispatch = useDispatch()

	const carBrands = useSelector((state) => state.carBrands)
	const { loading, error, cars } = carBrands

	useEffect(
		() => {
			dispatch(listCarBrands('lamborghini'))
		},
		[ dispatch ]
	)

	return (
		<>
			<h2 className='py-3 car-heading'>Lamborghini</h2>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<Row>
					<CustomTitle title='Lamborghini' />
					{cars.map((car) => (
						<Col key={car._id} sm={12} md={6} lg={4}>
							<CarPreview car={car} />
						</Col>
					))}
				</Row>
			)}
		</>
	)
}

export default LamborghiniPage
