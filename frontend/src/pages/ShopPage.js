import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CarBrandPreview from '../components/CarBrandPreview'
import cars from '../cars'
import { v4 as uuidv4 } from 'uuid'
import CustomTitle from '../components/CustomTitle'

const ShopPage = () => {
	return (
		<div>
			<CustomTitle title='Vehicles' />
			<h2 className='py-4'>Our Car Selection</h2>
			<Row>
				{cars.map((car) => (
					<Col key={uuidv4()} sm={12} md={6} lg={4}>
						<CarBrandPreview car={car} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default ShopPage
