import React from 'react'
import { Container } from 'react-bootstrap'
import AboutSection from '../components/AboutSection'
import CustomTitle from '../components/CustomTitle'
import Wave from '../components/Wave'

const HomePage = () => {
	return (
		<div>
			<CustomTitle title='Welcome To Vroom' />
			<Wave />
			<AboutSection />
		</div>
	)
}

export default HomePage
