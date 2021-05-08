import React from 'react'
import { motion } from 'framer-motion'
import { IntersectionScroll } from './IntersectionScroll'
import emailjs from 'emailjs-com'
import { toast } from 'react-toastify'
import { scrollReveal } from '../animations'
import { Row, Col } from 'react-bootstrap'
import currency from '../img/currency.svg'
import clock from '../img/clock.svg'
import agreement from '../img/agreement.svg'

const ContactForm = () => {
	const [ element, controls ] = IntersectionScroll()

	const sendEmailHandler = (e) => {
		e.preventDefault()

		emailjs.sendForm('service_z03iwzt', 'template_dy075w9', e.target, `${process.env.REACT_APP_EMAILJS_USER_ID}`).then(
			(result) => {
				toast.success('Email successfully sent!')
				e.target.reset()
			},
			(error) => {
				toast.error(error.text)
			}
		)
	
	}

	return (
		<motion.div className='margin-bottom-xl' variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
			<div className='text-center'>
				<h2 className='secondary-heading margin-bottom-md'>any questions or concerns?</h2>
			</div>
			<Row className='contact'>
				<Col xl={6}>
					<h3 className='text-center'>Get In Touch</h3>

					<form onSubmit={sendEmailHandler} id='contact-form'>
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

				<Col className='text-center promises'>
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
