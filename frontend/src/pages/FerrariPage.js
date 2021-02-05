import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import shopData from '../shopData'

const FerrariPage = () => {
	return (
		<div>
			<h2 className='py-3'>Ferrari</h2>
			<Row>
				{shopData[4].cars.map((car) => (
					<Col key={car._id} sm={12} md={6} lg={4}>
						<CarPreview car={car} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default FerrariPage
