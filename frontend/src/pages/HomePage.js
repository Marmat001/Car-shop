import React from 'react'
import { Container } from 'react-bootstrap'
import CustomTitle from '../components/CustomTitle'

import TopRatedCarousel from '../components/TopRatedCarousel'

const HomePage = () => {
	return (
		<Container>
			<CustomTitle title='Welcome To Vroom' />
			<TopRatedCarousel />
			{/* <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: '#00bc8c' }}>Welcome to Vroom!</h1> */}
		</Container>
	)
}

export default HomePage
