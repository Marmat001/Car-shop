import React from 'react'
import road1 from '../img/road1.jpeg'
import { Row, Container, Col } from 'react-bootstrap'

const ContactForm = () => {
	return (
		<Container>
			<Row className='contact'>
				<Col>
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
			</Row>
		</Container>
	)
}

export default ContactForm

// form ska ha name, email, subject, message, send message
