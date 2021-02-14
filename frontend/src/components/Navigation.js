import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchField from './SearchField'
import { logout } from '../actions/userActions'

const Navigation = () => {
	const dispatch = useDispatch()
	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const logoutHandler = () => {
		dispatch(logout())
	}

	return (
		<header>
			<Navbar className='fixed-top' style={{ backgroundColor: '#00bc8c' }} expand='lg' collapseOnSelect>
				<Container fluid className='px-5'>
					<LinkContainer to='/'>
						<Navbar.Brand id='nav-item'>
							<i className='fas fa-tachometer-alt mx-1' /> <strong>Vroom</strong>
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Route render={({ history }) => <SearchField history={history} />} />
						<Nav className='ml-auto'>
							<LinkContainer to='/vehicles'>
								<Nav.Link id='nav-item' className='mx-3'>
									<i className='fas fa-car mx-1' />
									<strong>Vehicles</strong>
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/cart'>
								<Nav.Link id='nav-item' className='mx-3'>
									<i className='fas fa-shopping-cart mx-1' />
									<strong>Cart</strong>
								</Nav.Link>
							</LinkContainer>
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
