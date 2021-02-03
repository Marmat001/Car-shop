import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const CarBrands = ({ car }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/vehicles/${car.category}`}>
				<Card.Img src={car.image} variant='top' />
			</Link>

			<Card.Body>
				<Link to={`/cars/${car.category}`}>
					<Card.Title as='div' style={{ textAlign: 'center' }}>
						<h3>
							<strong>{car.name}</strong>
						</h3>
					</Card.Title>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default CarBrands
