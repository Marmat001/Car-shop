import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import CustomTitle from '../components/CustomTitle'
import Google from '../components/GoogleLogin'

const LoginPage = ({ location, history }) => {
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')

	const dispatch = useDispatch()

	const userLogin = useSelector((state) => state.userLogin)
	const { loading, userInfo } = userLogin

	const redirect = location.search ? location.search.split('=')[1] : '/'

	useEffect(
		() => {
			if (userInfo) {
				history.push(redirect)
			}
		},
		[ history, userInfo, redirect ]
	)

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(email, password))
	}

	const informParent = (response) => {
		dispatch({
			type: 'USER_LOGIN_SUCCESS',
			payload: response.data.user
		})
		localStorage.setItem('userInfo', JSON.stringify(response.data.user))
	}

	return (
		<FormContainer>
			<CustomTitle title='Log In' />
			<h1 className='secondary-heading text-center'>Sign In</h1>
			{/* {error && <FadeMessage variant='danger'>{error}</FadeMessage>} */}
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<input
						className='input-field email padding-top-bottom'
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						autoFocus
					/>
				</Form.Group>

				<Form.Group controlId='password'>
					<Form.Label>Password</Form.Label>
					<input
						className='input-field password padding-top-bottom'
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Button type='submit' className='btn btn-block homebutton mb-1'>
					Sign In
				</Button>
			</Form>
			<Google informParent={informParent} />

			<Row className='py-3'>
				<Col>
					New Customer ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default LoginPage
