import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'
import CustomTitle from '../components/CustomTitle'

const RegisterPage = ({ location, history }) => {
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirmPassword, setConfirmPassword ] = useState('')

	const dispatch = useDispatch()

	const userRegister = useSelector((state) => state.userRegister)
	const { loading, userInfo } = userRegister

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
		if (password !== confirmPassword) {
			toast.error('Passwords do not match')
		} else if (password.length < 6) {
			toast.error('Password has to be at least 6 characters long')
		} else {
			dispatch(register(name, email, password))
		}
	}

	return (
		<FormContainer>
			<CustomTitle title='Register' />
			<h1 className='secondary-heading text-center'>Sign Up</h1>
			{loading && <Loader />}
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='name'>
					<Form.Label>Name</Form.Label>
					<input
						type='name'
						placeholder='Enter name'
						className='input-field name padding-top-bottom'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						autoFocus
					/>
				</Form.Group>

				<Form.Group controlId='email'>
					<Form.Label>Email Address</Form.Label>
					<input
						className='input-field email padding-top-bottom'
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
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

				<Form.Group controlId='confirmPassword'>
					<Form.Label>Confirm Password</Form.Label>
					<input
						className='input-field password padding-top-bottom'
						type='password'
						placeholder='Confirm password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</Form.Group>

				<Button type='submit' className='btn btn-block homebutton'>
					Register
				</Button>
			</Form>

			<Row className='py-3'>
				<Col>
					Have an Account ? <Link to={redirect ? `/Login?redirect=${redirect}` : '/Login'}>Login</Link>
				</Col>
			</Row>
		</FormContainer>
	)
}

export default RegisterPage
