import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Row, Col } from 'react-bootstrap'
import CarBrandPreview from '../components/CarBrandPreview'
import cars from '../cars'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listTopCars } from '../actions/carActions'
import CustomTitle from '../components/CustomTitle'

const ShopPage = () => {
	const dispatch = useDispatch()

	const carTopRated = useSelector((state) => state.carTopRated)
	const { loading, error, cars: carsTopRated } = carTopRated


	useEffect(
		() => {
			dispatch(listTopCars())
		},
		[ dispatch ]
	)

	return loading === undefined ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<div>
			<CustomTitle title='Vehicles' />
			<h1 className='py-3 pb-4 text-center'>Latest Additions</h1>
			<Carousel autoPlay={true} interval={2500} pause='hover' className='bg-dark'>
				{carsTopRated.map((car) => (
					<Carousel.Item key={car._id}>
						<Link to={`/vehicles/${car.brand}/${car.model}`}>
							<Image src={car.image} alt={car.name} fluid />
						</Link>
					</Carousel.Item>
				))}
			</Carousel>
			<div>
				<h1 className='py-4 pt-5'>Our Car Selection</h1>
				<Row>
					{cars.map((car) => (
						<Col key={uuidv4()} sm={12} md={6} lg={4}>
							<CarBrandPreview car={car} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	)
}

export default ShopPage
