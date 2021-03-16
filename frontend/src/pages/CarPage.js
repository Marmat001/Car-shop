import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import { listCarDetails, createCarReview } from '../actions/carActions'
import Loader from '../components/Loader'
import { Message } from '../components/Message'
import CustomTitle from '../components/CustomTitle'
import { addToCart } from '../actions/cartActions'

const CarPage = ({ history, match }) => {
	const [ qty, setQty ] = useState(1)
	const [ rating, setRating ] = useState(0)
	const [ comment, setComment ] = useState('')
	const [ loading, setLoading ] = useState(true)

	const carModel = match.params.model

	const dispatch = useDispatch()

	const carDetails = useSelector((state) => state.carDetails)
	const { error, car } = carDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const carCreateReview = useSelector((state) => state.carCreateReview)
	const { success: successCarReview, loading: loadingCarReview } = carCreateReview

	useEffect(
		() => {
			if (car.model !== carModel || !car.name || successCarReview) {
				dispatch(listCarDetails(carModel))
				dispatch({ type: 'CAR_CREATE_REVIEW_RESET' })
			}

			if (successCarReview) {
				setRating(0)
				setComment('')
			}

			setTimeout(() => {
				setLoading(false)
			}, 200)
		},
		[ dispatch, match, successCarReview, car, carModel ]
	)

	const AddCarToCartHandler = () => {
		dispatch(addToCart(carModel, car.brand, qty))

		dispatch({
			type: 'CART_TOGGLE_SHOW'
		})

		const delay = setTimeout(() => {
			dispatch({
				type: 'CART_TOGGLE_HIDDEN'
			})
		}, 1000)
		return () => {
			clearTimeout(delay)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(createCarReview(car._id, carModel, { rating, comment }))
	}

	return (
		<div>
			<Button className='btn homebutton mt-5 mb-4' onClick={() => history.goBack()}>
				Go Back
			</Button>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<CustomTitle title={car.name} />
					<Row className='pt-3'>
						<Col id='contact-form' className='mt-0' lg={12}>
							<Image src={car.image} alt={car.name} fluid />
						</Col>

						<Col lg={12}>
							<ListGroup id='contact-form' className='mt-0'>
								<ListGroup.Item>
									<h2>{car.name}</h2>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={car.rating}
										text={
											car.reviewAmount === 0 ? (
												'Not Rated Yet'
											) : car.reviewAmount > 1 ? (
												`${car.reviewAmount} reviews`
											) : (
												`${car.reviewAmount} review`
											)
										}
									/>
								</ListGroup.Item>
								<ListGroup.Item>Price: $ {car.price}</ListGroup.Item>
								<ListGroup.Item>{car.description}</ListGroup.Item>
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
										<Col>Color:</Col>
										<Col>
											<strong>{car.color}</strong>
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
												<select
													className='input-field countInStock padding-top-bottom'
													value={qty}
													onChange={(e) => setQty(Number(e.target.value))}
												>
													{[ ...Array(car.countInStock).keys() ].map((x) => (
														<option key={x + 1} value={x + 1}>
															{x + 1}
														</option>
													))}
												</select>
											</Col>
										</Row>
									</ListGroup.Item>
								)}
								<ListGroup.Item>
									<Button
										onClick={AddCarToCartHandler}
										className='btn btn-block homebutton'
										type='button'
										disabled={car.countInStock === 0}
									>
										Add To Cart
									</Button>
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row>
						<Col lg={12}>
							<h2 id='contact-form' className='mb-0'>
								Reviews
							</h2>
							<ListGroup id='contact-form' className='mt-0'>
								{car.reviews.length === 0 && <Message>No reviews to display</Message>}
								{car.reviews.map((review) => (
									<ListGroup.Item key={review._id}>
										<strong>{review.name}</strong>
										<Rating value={review.rating} />
										<p>{review.createdAt.substring(0, 10)}</p>
										<p>{review.comment}</p>
									</ListGroup.Item>
								))}
								<ListGroup.Item>
									<h2 className='car-heading customer-review'>WRITE A CUSTOMER REVIEW</h2>
									{loadingCarReview && <Loader />}

									{userInfo ? (
										<Form onSubmit={submitHandler}>
											<Form.Group controlId='rating'>
												<Form.Label>Rating</Form.Label>
												<select
													className='input-field rating padding-top-bottom'
													value={rating}
													onChange={(e) => setRating(e.target.value)}
												>
													<option value=''>Select...</option>
													<option value='1'>Poor</option>
													<option value='2'>Fair</option>
													<option value='3'>Good</option>
													<option value='4'>Very Good</option>
													<option value='5'>Excellent</option>
												</select>
											</Form.Group>
											<Form.Group controlId='comment'>
												<Form.Label>Comment</Form.Label>
												<input
													className='input-field comment padding-top-bottom'
													as='textarea'
													row='3'
													value={comment}
													onChange={(e) => setComment(e.target.value)}
												/>
											</Form.Group>
											<Button type='submit' className='btn btn-block homebutton'>
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
				</div>
			)}
		</div>
	)
}

export default CarPage
