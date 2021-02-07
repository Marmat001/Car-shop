import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'

const BmwPage = () => {
	const [ shopData, setShopData ] = useState([])

	useEffect(() => {
		const fetchCars = async () => {
			const { data } = await axios.get('/api/vehicles/bmw')

			setShopData(data)
		}
		fetchCars()
	}, [])
 
	return (
		<div>
			<h2 className='py-3'>BMW</h2>
			<Row>
				{shopData.map((car) => (
					<Col key={car._id} sm={12} md={6} lg={4}>
						<CarPreview car={car} />
					</Col>
				))}
			</Row>
		</div>
	)
}

export default BmwPage
