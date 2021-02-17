import React from 'react'
import { useHistory } from 'react-router-dom'

import wallpaper from '../img/wallpaper.jpeg'
import { motion } from 'framer-motion'
import { titleAnim, photoAnim, fade } from '../animations'
import { Container } from 'react-bootstrap'

const IntroSection = () => {
	const history = useHistory()

	const onClickHandler = () => {
		history.push('/vehicles')
	}
	return (
		<Container className='intro'>
			<div className='description'>
				<div className='hidden'>
					<motion.h2 className='slogan' variants={titleAnim}>
						Our goal is to make
					</motion.h2>
				</div>
				<div className='hidden'>
					<motion.h2 className='slogan' variants={titleAnim}>
						your <span className='primary-heading'>DREAM</span> car
					</motion.h2>
				</div>
				<div className='hidden'>
					<motion.h2 className='slogan' variants={titleAnim}>
						yours.
					</motion.h2>
				</div>

				<motion.h5 variants={fade}>Contact us for any inquiries or questions regarding our car selection.</motion.h5>
				<motion.button className='homebutton' onClick={onClickHandler} variants={fade}>
					View Inventory
				</motion.button>
			</div>
			<div className='image'>
				<motion.img variants={photoAnim} src={wallpaper} alt='road' />
			</div>
		</Container>
	)
}

export default IntroSection
