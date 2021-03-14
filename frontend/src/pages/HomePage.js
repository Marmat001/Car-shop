import React from 'react'
import { motion } from 'framer-motion'
import IntroSection from '../components/IntroSection'
import CustomTitle from '../components/CustomTitle'
import { pageAnimation } from '../animations'
import { Container } from 'react-bootstrap'
import Wave from '../components/Wave'
import AboutSection from '../components/AboutSection'
import ContactForm from '../components/ContactForm'

const HomePage = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<CustomTitle title='Welcome To Vroom' />
			<Container>
				<Wave />
				<IntroSection />
				<AboutSection />
				{/* <ContactForm /> */}
			</Container>
		</motion.div>
	)
}

export default HomePage
