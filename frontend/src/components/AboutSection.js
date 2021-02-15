import React from 'react'
import wallpaper from '../img/road1.jpeg'
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animations'
import Wave from './Wave'

export default function AboutSection() {
	return (
		<motion.div className='about'>
			<motion.div className='description'>
				<motion.div>
					<div className='hidden'>
						<motion.h2 className='slogan' variants={titleAnim}>
							Our goal is to make
						</motion.h2>
					</div>
					<div className='hidden'>
						<motion.h2 className='slogan' variants={titleAnim}>
							your <span>dream</span> car
						</motion.h2>
					</div>
					<div className='hidden'>
						<motion.h2 className='slogan' variants={titleAnim}>
							yours.
						</motion.h2>
					</div>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We have professionals with amazing skills
				</motion.p>
				<motion.button className='homebutton' variants={fade}>
					Contact Us
				</motion.button>
			</motion.div>
			<motion.div className='image'>
				<motion.img variants={photoAnim} src={wallpaper} alt='road' />
			</motion.div>
		</motion.div>
	)
}
