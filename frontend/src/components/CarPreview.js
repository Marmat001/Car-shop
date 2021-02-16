import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const CarBrandPreview = ({ car }) => {
	const location = useLocation()

	return (
		<Card className='my-3 p-3 rounded'>
			<Link to={`/vehicles/${car.brand}/${car.model}`}>
				<Card.Img src={car.image} variant='top' />
			</Link>

			<Card.Body>
				<Link to={`/vehicles/${car.brand}/${car.model}`}>
					<Card.Title as='div' className='text-center'>
						<h3>
							<strong>{car.name}</strong>
						</h3>
					</Card.Title>
				</Link>
			</Card.Body>
		</Card>
	)
}

export default CarBrandPreview
