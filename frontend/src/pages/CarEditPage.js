import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listCarDetails, updateCar } from '../actions/carActions'
import CustomTitle from '../components/CustomTitle'

const CarEditPage = ({ match, history }) => {
	const carId = match.params.id
	const carModel = match.params.model
	const carBrand = match.params.brand

	const { pathname } = useLocation()

	const [ name, setName ] = useState('')
	const [ price, setPrice ] = useState(0)
	const [ image, setImage ] = useState('')
	const [ model, setModel ] = useState('')
	const [ brand, setBrand ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ countInStock, setCountInStock ] = useState(0)
	const [ description, setDescription ] = useState('')
	const [ uploading, setUploading ] = useState(false)

	const dispatch = useDispatch()

	const carDetails = useSelector((state) => state.carDetails)
	const { loading, error, car } = carDetails

	const carUpdate = useSelector((state) => state.carUpdate)
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = carUpdate
	console.log(car)
	useEffect(
		() => {
			if (successUpdate) {
				dispatch({ type: 'CAR_UPDATE_RESET' })
				history.push('/admin/carlist')
			} else {
				if ((!car.name && pathname.includes(carModel)) || (car._id !== carId && pathname.includes(carModel))) {
					dispatch(listCarDetails(carModel))
				} else if (carModel) {
					setName(car.name)
					setPrice(car.price)
					setImage(car.image)
					setModel(car.model)
					setBrand(car.brand)
					setCategory(car.category)
					setCountInStock(car.countInStock)
					setDescription(car.description)
				} else {
					setName('Sample name')
					setPrice(0)
					setImage('images/sample.jpg')
					setModel('Sample model')
					setBrand('Sample brand')
					setCategory('Sample category')
					setCountInStock(0)
					setDescription('Sample description')
				}
			}
		},
		[ dispatch, history, carBrand, carModel, carId, successUpdate, car.name ]
	)

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

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(
			updateCar({
				_id: carId,
				name,
				price,
				image,
				model,
				brand,
				category,
				description,
				countInStock
			})
		)
	}

	return (
		<div>
			<Link to='/admin/carlist' className='btn btn-light my-3'>
				Go Back
			</Link>
			<FormContainer>
				{pathname.includes(carModel) ? <h1>Edit Car Information</h1> : <h1>Add New Car Information</h1>}

				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<CustomTitle title='Car Information' />
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<input
								className='input-field padding-top-bottom name'
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='price'>
							<Form.Label>Price</Form.Label>
							<input
								className='input-field padding-top-bottom price'
								type='number'
								placeholder='Enter price'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='image'>
							<Form.Label>Image</Form.Label>
							<input
								className='input-field padding-top-bottom image'
								t
								type='text'
								placeholder='Enter image url'
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
							<Form.File id='image-file' label='Choose file' custom onChange={uploadFileHandler}>
								{uploading && <Loader />}
							</Form.File>
						</Form.Group>

						<Form.Group controlId='model'>
							<Form.Label>Model</Form.Label>
							<input
								className='input-field padding-top-bottom model'
								type='text'
								placeholder='Enter model'
								value={model}
								onChange={(e) => setModel(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='brand'>
							<Form.Label>Brand</Form.Label>
							<input
								className='input-field padding-top-bottom brand'
								type='text'
								placeholder='Enter brand'
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='countInStock'>
							<Form.Label>Count In Stock</Form.Label>
							<input
								className='input-field padding-top-bottom countInStock'
								t
								type='number'
								placeholder='Enter countInStock'
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='category'>
							<Form.Label>Category</Form.Label>
							<input
								className='input-field padding-top-bottom category'
								t
								type='text'
								placeholder='Enter category'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<textarea
								className='input-field padding-top-bottom description'
								t
								type='text'
								placeholder='Enter description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Group>

						<Button type='submit' variant='primary'>
							{pathname.includes(carModel) ? 'Update' : 'Add'}
						</Button>
					</Form>
				)}
			</FormContainer>
		</div>
	)
}

export default CarEditPage
