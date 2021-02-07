import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

import { Navbar, Nav, Container } from 'react-bootstrap'

const Navigation = () => {
	return (
		<header>
			<Navbar className='fixed-top' style={{ backgroundColor: '#00bc8c' }} expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<i className='fas fa-tachometer-alt mx-1' /> <strong style={{ color: 'white' }}>Vroom</strong>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/vehicles'>
								<Nav.Link className='mx-3'>
									<i className='fas fa-car mx-1' />
									<strong style={{ color: 'white' }}>Vehicles</strong>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<Nav.Link className='mx-3'>
									<i className='fas fa-shopping-cart mx-1' />
									<strong style={{ color: 'white' }}>Cart</strong>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link className='mx-3'>
									<i className='fas fa-user mx-1' />
									<strong style={{ color: 'white' }}>Sign In</strong>
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Navigation
