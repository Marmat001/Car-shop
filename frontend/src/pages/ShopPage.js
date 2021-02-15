import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CarBrandPreview from '../components/CarBrandPreview'
import cars from '../cars'
import { v4 as uuidv4 } from 'uuid'
import CustomTitle from '../components/CustomTitle'
import TopRatedCarousel from '../components/TopRatedCarousel'

const ShopPage = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }} className='py-3 pb-4'>
				Our Most Viewed Cars
			</h1>
			<TopRatedCarousel />
			<CustomTitle title='Vehicles' />
			<h1 className='py-4 pt-5'>Our Car Selection</h1>
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
