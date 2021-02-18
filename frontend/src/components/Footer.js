import React from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import vroom from '../img/speedometer.svg'

const Footer = ({ location }) => {
	const { pathname } = useLocation()

	return (
		<footer>
			{' '}
			{pathname === '/' ? (
				<Container className='text-center'>
					<img className='vroom-icon-lg margin-bottom-sm' src={vroom} alt='speedometer' />
					<h5 className='text-center py-3 margin-bottom-md'>Copyright &copy; Vroom</h5>
					<h6 class='author'>Designed & built by Markus Matuszczak</h6>
				</Container>
			) : (
				<h5 className='text-center py-3 margin-bottom-md'>Copyright &copy; Vroom</h5>
			)}
		</footer>
	)
}

export default Footer
