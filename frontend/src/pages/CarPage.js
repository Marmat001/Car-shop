import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listCarDetails } from '../actions/carActions'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'

const CarPage = ({history, match }) => {
	const [qty, setQty] = useState(1)


	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const carDetails = useSelector((state) => state.carDetails)
	const { loading, error, car } = carDetails

	useEffect(
		() => {
			if (pathname.includes('/bmw')) {
				dispatch(listCarDetails('bmw', match.params.model))
			}

			if (pathname.includes('/mercedes')) {
				dispatch(listCarDetails('mercedes', match.params.model))
			}
			if (pathname.includes('/audi')) {
				dispatch(listCarDetails('audi', match.params.model))
			}
			if (pathname.includes('/mclaren')) {
				dispatch(listCarDetails('mclaren', match.params.model))
			}
			if (pathname.includes('/ferrari')) {
				dispatch(listCarDetails('ferrari', match.params.model))
			}
			if (pathname.includes('/lamborghini')) {
				dispatch(listCarDetails('lamborghini', match.params.model))
			}
		},
		[ dispatch, match, pathname ]
	)

	const AddCarToCartHandler = () => {
		history.push(`/cart/${match.params.model}?qty=${qty}`)
	}


	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : (
				<Row>
				<Col md={6}>
					<Image src={car[0]?.image} alt={car[0]?.name} fluid />
				</Col>

				<Col md={3}>
					<ListGroup variant='flush'>
						<ListGroup.Item>
							<h2>{car[0]?.name}</h2>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={car[0]?.rating}
								text={car[0]?.reviewAmount === 0 ? 'Not Rated Yet' : `${car[0]?.reviewAmount} reviews`}
							/>
						</ListGroup.Item>
						<ListGroup.Item>Price: $ {car[0]?.price}</ListGroup.Item>
						<ListGroup.Item>{car[0]?.description}</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant='flush'>
							<ListGroup.Item>
								<Row>
									<Col>Price:</Col>
									<Col>
										<strong>${car[0]?.price}</strong>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status:</Col>
									<Col>{car[0]?.countInStock > 0 ? 'Available' : 'Not available'}</Col>
								</Row>
							</ListGroup.Item>
							{car[0]?.countInStock > 0 && (
								<ListGroup.Item>
									<Row>
										<Col>Qty</Col>
										<Col>
											<Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
												{[...Array(car[0]?.countInStock).keys()].map((x) => (
													<option key={x + 1} value={x + 1}>
														{x + 1}
													</option>
												))}
											</Form.Control>
										</Col>
									</Row>
								</ListGroup.Item>
							)}
							<ListGroup.Item>
								<Button onClick={AddCarToCartHandler} className='btn-block' type='button' disabled={car[0]?.countInStock === 0}>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
			)}
			
		</>
	)
}

export default CarPage

{
	/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */
}
