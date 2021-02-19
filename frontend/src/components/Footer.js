import React from 'react'
import { useLocation } from 'react-router-dom'
import vroom from '../img/speedometer.svg'

const Footer = () => {
	const { pathname } = useLocation()

	return (
		<footer>
			{' '}
			{pathname === '/' ? (
				<div className='text-center'>
					<img className='vroom-icon-lg margin-bottom-sm' src={vroom} alt='speedometer' />
					<h5 className='text-center py-3 margin-bottom-md'>Copyright &copy; Vroom</h5>
					<h6 className='author'>Designed & built by Markus Matuszczak</h6>
				</div>
			) : (
				<h5 className='text-center py-3 pt-5'>Copyright &copy; Vroom</h5>
			)}
		</footer>
	)
}

export default Footer
