import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopCars } from '../actions/carActions'

const TopRatedCarousel = () => {
	const dispatch = useDispatch()

	const carTopRated = useSelector((state) => state.carTopRated)
	const { loading, error, cars } = carTopRated

	useEffect(
		() => {
			dispatch(listTopCars())
			console.log(cars)
		},
		[ dispatch ]
	)

	return loading ? (
		<Loader />
	) : error ? (
		<Message variant='danger'>{error}</Message>
	) : (
		<Carousel autoPlay={true} interval={2500} pause='hover' className='bg-dark'>
			{cars.map((car) => (
				<Carousel.Item key={car._id}>
					<Link to={`/vehicles/${car.brand}/${car.model}`}>
						<Image src={car.image} alt={car.name} fluid />
					</Link>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default TopRatedCarousel
