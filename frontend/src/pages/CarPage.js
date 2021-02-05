import React from 'react'

import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import shopData from '../shopData'

const CarPage = ({ match }) => {
	const carBrands = shopData.map((data) => data.cars.map((car) => car))
	const cars = [ ...carBrands[0], ...carBrands[1], ...carBrands[2], ...carBrands[3], ...carBrands[4], ...carBrands[5] ]
	const car = cars.find((c) => c.model === match.params.model)

	return (
		<div>
			<Link className='btn btn-light my-3' to='/'>
				Go Back
			</Link>
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
							<ListGroup.Item>
								<Button className='btn-block' type='button' disabled={car.countInStock === 0}>
									Add To Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default CarPage

{
	/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> */
}
