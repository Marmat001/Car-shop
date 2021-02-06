import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import CarPreview from '../components/CarPreview'
import axios from 'axios'

const MclarenPage = () => {
	const [ shopData, setShopData ] = useState([])

	useEffect(() => {
		const fetchCars = async () => {
			const { data } = await axios.get('/api/vehicles/mclaren')

			setShopData(data)
		}
		fetchCars()
	}, [])
	return (
		<div>
			<h2 className='py-3'>Mclaren</h2>
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

export default MclarenPage
