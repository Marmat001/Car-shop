import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CarBrands from '../components/CarBrands'
import cars from '../cars'
import carbackend from '../carbackend'

const ShopPage = () => {
	return (
		<div>
			<h2 className='py-3'>Our Car Selection</h2>
			<Row>
				{carbackend[0].bmw.map((car) => (
					<Col key={car._id} sm={12} md={6} lg={4}>
						<CarBrands car={car} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default ShopPage
