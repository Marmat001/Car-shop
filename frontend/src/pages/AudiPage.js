import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import shopData from '../shopData'

const AudiPage = () => {
	return (
		<div>
			<h2 className='py-3'>Audi</h2>
			<Row>
				{shopData[2].cars.map((car) => (
					<Col key={car._id} sm={12} md={6} lg={4}>
						<CarPreview car={car} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default AudiPage
