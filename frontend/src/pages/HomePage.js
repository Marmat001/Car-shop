import { motion } from 'framer-motion'
import React from 'react'
import AboutSection from '../components/AboutSection'
import CustomTitle from '../components/CustomTitle'
import { pageAnimation } from '../animations'
import Wave from '../components/Wave'

const HomePage = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<CustomTitle title='Welcome To Vroom' />
			<Wave />
			<AboutSection />
		</motion.div>
	)
}

export default HomePage
