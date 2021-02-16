import { motion } from 'framer-motion'
import React from 'react'
import IntroSection from '../components/IntroSection'
import CustomTitle from '../components/CustomTitle'
import { pageAnimation } from '../animations'
import Wave from '../components/Wave'
import AboutSection from '../components/AboutSection'

const HomePage = () => {
	return (
		<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
			<CustomTitle title='Welcome To Vroom' />
			<Wave />
			<IntroSection />
			<AboutSection />
		</motion.div>
	)
}

export default HomePage
