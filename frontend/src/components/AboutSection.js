import React from 'react'
import wallpaper from '../img/road1.jpeg'
import { motion } from 'framer-motion'
import { titleAnim, photoAnim, fade } from '../animations'

export default function AboutSection() {
	return (
		<motion.div className='about'>
			<div className='description'>
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
				<motion.h5 variants={fade}>Contact us for any inquiries or questions regarding our car selection.</motion.h5>
				<motion.button className='homebutton' variants={fade}>
					Get In Touch
				</motion.button>
			</div>
			<motion.div className='image'>
				<motion.img variants={photoAnim} src={wallpaper} alt='road' />
			</motion.div>
		</motion.div>
	)
}
