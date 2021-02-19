import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listCarDetails, createCarReview } from '../actions/carActions'
import { useLocation } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import CustomTitle from '../components/CustomTitle'

const CarPage = ({ history, match }) => {
	const [ qty, setQty ] = useState(1)
	const [ rating, setRating ] = useState(0)
	const [ comment, setComment ] = useState('')

	const carModel = match.params.model

	const dispatch = useDispatch()
	const { pathname } = useLocation()

	const carDetails = useSelector((state) => state.carDetails)
	const { loading, error, car } = carDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const carCreateReview = useSelector((state) => state.carCreateReview)
	const { success: successCarReview, error: errorCarReview } = carCreateReview

	useEffect(
		() => {
			if (successCarReview) {
				alert('Review Submitted!')
				setRating(0)
				setComment('')
				dispatch({ type: 'CAR_CREATE_REVIEW_RESET' })
			}

			dispatch(listCarDetails(carModel))

		
		
		},
		[ dispatch, match, pathname, successCarReview, carModel ]
	)

	const AddCarToCartHandler = () => {
		history.push(`/cart/${match.params.model}?qty=${qty}`)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(createCarReview(car._id, match.params.model, { rating, comment }))
	}


	return (
		<>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
			{loading === undefined ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<>
					<CustomTitle title={car.name}/>
					<Row>
						<Col md={6}>
							<Image src={car.image} alt={car.name} fluid />
						</Col>

						<Col md={3}>
							<ListGroup variant='flush'>
								<ListGroup.Item>
									<h2>{car.name}</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={car.rating}
										text={car.reviewAmount === 0 ? 'Not Rated Yet' : `${car.reviewAmount} reviews`}
									/>
								</ListGroup.Item>
								<ListGroup.Item>Price: $ {car.price}</ListGroup.Item>
								<ListGroup.Item>{car.description}</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup variant='flush'>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>${car.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>{car.countInStock > 0 ? 'Available' : 'Not available'}</Col>
										</Row>
									</ListGroup.Item>
									{car.countInStock > 0 && (
										<ListGroup.Item>
											<Row>
												<Col>Qty</Col>
												<Col>
													<Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
														{[ ...Array(car.countInStock).keys() ].map((x) => (
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
										<Button
											onClick={AddCarToCartHandler}
											className='btn-block'
											type='button'
											disabled={car.countInStock === 0}
										>
											Add To Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
					<Row>
						<Col md={6}>
							<h2>Reviews</h2>
							{car.reviews.length === 0 && <Message>No Reviews</Message>}
							<ListGroup variant='flush'>
								{car.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating value={review.rating} />
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2>Write a Customer Review</h2>
									{errorCarReview && <Message variant='danger'>{errorCarReview}</Message>}
									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
													<option value=''>Select...</option>
													<option value='1'>Poor</option>
													<option value='2'>Fair</option>
													<option value='3'>Good</option>
													<option value='4'>Very Good</option>
													<option value='5'>Excellent</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<Form.Control
													as='textarea'
													row='3'
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												/>
											</Form.Group>
											<Button type='submit' variant='primary'>
												Submit
											</Button>
										</Form>
									) : (
										<Message>
											Please <Link to='/login'>sign in</Link> to write a review
										</Message>
									)}
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</>
			)}
		</>
	)
}

export default CarPage

{
	/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */
}
