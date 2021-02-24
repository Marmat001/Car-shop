import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import speedometer from '../img/speedometer.svg'
import CartIcon from './CartIcon'
import CartDropdown from './CartDropdown'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchField from './SearchField'
import { logout } from '../actions/userActions'

const Navigation = () => {
	const dispatch = useDispatch()

	const [ hidden, setHidden ] = useState(true)

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Navbar
				className='fixed-top'
				style={{ backgroundImage: 'linear-gradient(to right, #7ed57f, #28b486)' }}
				expand='lg'
				collapseOnSelect
			>
				<Container fluid className='px-5'>
					<LinkContainer to='/'>
						<Navbar.Brand id='nav-item'>
							<img className='vroom-icon-sm' src={speedometer} alt='speedometer' />
							<strong>Vroom</strong>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchField history={history} />} />
						<Nav id='nav-item' className='ml-auto'>
							<LinkContainer to='/vehicles'>
								<Nav.Link id='nav-item' className='mx-3'>
									<i className='fas fa-car mx-1' />
									<strong>Vehicles</strong>
								</Nav.Link>
							</LinkContainer>
							<div onMouseEnter={() => setHidden(false)} onMouseLeave={() => setHidden(true)}>
								<LinkContainer to='/cart'>
									<Nav.Link id='nav-item-cart' className='mx-3 nav-cart'>
										<CartIcon />
										<strong>Cart</strong>
									</Nav.Link>
								</LinkContainer>
								{hidden ? null : (
									<div>
										<Route
											render={({ history, location, match }) => (
												<CartDropdown history={history} location={location} match={match} />
											)}
										/>
									</div>
								)}
							</div>

							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>Log Out</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link id='nav-item' className='mx-3'>
										<i className='fas fa-user mx-1' />
										<strong>Sign In</strong>
									</Nav.Link>
								</LinkContainer>
							)}

							{userInfo &&
							userInfo.isAdmin && (
								<NavDropdown title='Admin' id='nav-item'>
									<LinkContainer to='/admin/userlist'>
										<NavDropdown.Item>Users</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/carlist'>
										<NavDropdown.Item>Cars</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer to='/admin/orderlist'>
										<NavDropdown.Item>Orders</NavDropdown.Item>
									</LinkContainer>
								</NavDropdown>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Navigation
