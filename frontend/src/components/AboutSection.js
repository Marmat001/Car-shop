import React from 'react'
import car1 from '../img/car1.jpeg'
import car2 from '../img/car2.jpeg'
import car3 from '../img/car3.jpeg'
import { motion } from 'framer-motion'
import { Row, Col, Image } from 'react-bootstrap'
import { IntersectionScroll } from './IntersectionScroll'
import { scrollReveal } from '../animations'

const AboutSection = () => {
	const [ element, controls ] = IntersectionScroll()

	return (
		<motion.div className='about'>
			<div className='text-center'>
				<h2 className='secondary-heading margin-bottom-lg slogan-2'>The whiff of that new car smell has never been closer</h2>
			</div>

			<Row>
				<Col lg={12} xl={6}>
					<h5 className='heading-tertiary'>Cars in which your every moment will be memorable</h5>
					<p className='paragraph'>
						With the best selection of cars you're looking for. You pick the one that suits you, and unleash your
						passion on the road. It's as simple as that!
					</p>

					<h5 className='heading-tertiary'>Choose what is right for you</h5>
					<p className='paragraph'>
						The price you see is the price you pay. We will contact you after you've placed your order to ensure that we
						can give you the quality you deserve. No need to pay until the car has been checked as available and full
						disclosure is ensured.
					</p>
				</Col>
				<Col lg={12} xl={6}>
					<div className='composition'>
						<Image src={car1} alt='car 1' className='composition-photo photo-1' />
						<Image src={car2} alt='car 2' className='composition-photo photo-2' />
						<Image src={car3} alt='car 3' className='composition-photo photo-3' />
					</div>
				</Col>
			</Row>
		</motion.div>
	)
}

export default AboutSection
