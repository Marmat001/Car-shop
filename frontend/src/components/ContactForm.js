import React from 'react'
import { motion } from 'framer-motion'
import { IntersectionScroll } from './IntersectionScroll'
import { scrollReveal } from '../animations'
import { Row, Col } from 'react-bootstrap'
import currency from '../img/currency.svg'
import clock from '../img/clock.svg'
import agreement from '../img/agreement.svg'

const ContactForm = () => {
	const [ element, controls ] = IntersectionScroll()

	return (
		<motion.div className='margin-bottom-xl' variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
			<div className='text-center'>
				<h2 className='secondary-heading margin-bottom-md'>any questions or concerns?</h2>
			</div>
			<Row className='contact'>
				<Col xl={6}>
					<h3 className='text-center'>Get In Touch</h3>

					<form id='contact-form'>
						<a name='contact' />

						<label>Your Name</label>
						<input className='input-field name' type='text' name='name' required />

						<label>Subject</label>
						<input className='input-field subject' type='text' name='subject' required />

						<label>Your Email</label>
						<input className='input-field email' type='email' name='email' required />

						<label>Your Message</label>
						<textarea className='input-field message' name='message' required />

						<input id='submit-btn' type='submit' value='Send Message' />
					</form>
				</Col>

				<Col className='text-center'>
					<h2 className='margin-bottom-sm'>High Quality Service Guaranteed</h2>

					<div className='margin-bottom-md'>
						<img className='margin-bottom-sm' src={currency} alt='currency' />
						<h5>Pay when you feel ready</h5>
					</div>

					<div className='margin-bottom-md'>
						<img className='margin-bottom-sm' src={clock} alt='clock' />
						<h5>Answer within 24 hours</h5>
					</div>

					<div className='margin-bottom-md'>
						<img className='margin-bottom-sm' src={agreement} alt='agreement' />
						<h5>Team up to safety</h5>
					</div>
				</Col>
			</Row>
		</motion.div>
	)
}

export default ContactForm

// form ska ha name, email, subject, message, send message
