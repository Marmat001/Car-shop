import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Button, Row, Col, Table, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listMyOrders } from '../actions/orderActions'
import CustomTitle from '../components/CustomTitle'
import FormContainer from '../components/FormContainer'
import Invoice from '../components/Invoice'
import { PDFDownloadLink } from '@react-pdf/renderer'

const ProfilePage = ({ history }) => {
	const [ name, setName ] = useState('')
	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirmPassword, setConfirmPassword ] = useState('')
	const [ image, setImage ] = useState('')
	const [ uploading, setUploading ] = useState(false)

	const dispatch = useDispatch()

	const userDetails = useSelector((state) => state.userDetails)
	const { loading, error, user } = userDetails

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
	const { success } = userUpdateProfile

	const orderListMy = useSelector((state) => state.orderListMy)
	const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

	useEffect(
		() => {
			if (!userInfo) {
				history.push('/login')
			} else {
				if (!user || !user.name || success) {
					dispatch({ type: 'USER_UPDATE_PROFILE_RESET' })
					dispatch(getUserDetails('profile'))
					dispatch(listMyOrders())
				} else {
					setName(user.name)
					setEmail(user.email)
					setImage(user.image)
				}
			}
		},
		[ history, userInfo, dispatch, user, success ]
	)

	const submitHandler = (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			toast.error('Passwords do not match')
		} else {
			dispatch(updateUserProfile({ id: user._id, name, email, password, image }))
		}
	}

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('image', file)
		setUploading(true)
		try {
			const config = {
				header: {
					'Content-Type': 'multipart/form-data'
				}
			}
			const { data } = await axios.post('/api/upload', formData, config)
			setImage(data)
			setUploading(false)
		} catch (error) {
			console.error(error)
			setUploading(false)
		}
	}

	return (
		<Row>
			<CustomTitle title='Profile' />
			<Col xl={5}>
				<h2>User Profile</h2>
				{error && <Message variant='danger'>{error}</Message>}
				<FormContainer>
					{success && <Message variant='success'>Profile Updated</Message>}
					<Form onSubmit={submitHandler}>
						<Form.Group className='layout-profile' controlId='image'>
							{!image ? <h4>Add Profile Image</h4> : ''}

							{loading ? <Loader /> : <Image className='profile-image' src={image} />}
							<Form.File id='image-file' label='Choose file' custom onChange={uploadFileHandler}>
								{uploading && <Loader />}
							</Form.File>
						</Form.Group>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<input
								className='input-field name'
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='email'>
							<Form.Label>Email Address</Form.Label>
							<input
								className='input-field email'
								type='email'
								placeholder='Enter email'
								value={email}
								disabled
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='password'>
							<Form.Label>Password</Form.Label>
							<input
								className='input-field password'
								type='password'
								placeholder='Enter password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='confirmPassword'>
							<Form.Label>Confirm Password</Form.Label>
							<input
								className='input-field password'
								type='password'
								placeholder='Confirm password'
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</Form.Group>

						<Button type='submit' id='submit-btn'>
							Update
						</Button>
					</Form>
				</FormContainer>
			</Col>
			<Col xl={7}>
				<h2>My Orders</h2>
				{loadingOrders ? (
					<Loader />
				) : errorOrders ? (
					<Message variant='danger'>{errorOrders}</Message>
				) : (
					<Table striped bordered hover responsive className='table-sm align-middle'>
						<thead>
							<tr>
								<th>ID</th>
								<th>DATE</th>
								<th>TOTAL</th>
								<th>PAID</th>
								<th>DELIVERED</th>
								<th />
								<th />
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr key={order._id}>
									<td>{order._id}</td>
									<td>{order.createdAt.substring(0, 10)}</td>
									<td>{order.totalPrice.toFixed(0)}</td>
									<td>
										{order.isPaid ? (
											order.paidAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }} />
										)}
									</td>
									<td>
										{order.isDelivered ? (
											order.deliveredAt.substring(0, 10)
										) : (
											<i className='fas fa-times' style={{ color: 'red' }} />
										)}
									</td>
									<td>
										<LinkContainer to={`/order/${order._id}`}>
											<Button className='btn-sm' variant='light'>
												Details
											</Button>
										</LinkContainer>
									</td>

									<td>
										<PDFDownloadLink document={<Invoice order={order} />} fileName='invoice.pdf'>
											<Button className='btn-sm' variant='light'>
												Download PDF
											</Button>
										</PDFDownloadLink>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				)}
				{orders?.length === 0 ? <h1 style={{ textAlign: 'center' }}>No Orders To display</h1> : ''}
			</Col>
		</Row>
	)
}

export default ProfilePage
