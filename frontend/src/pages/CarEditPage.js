import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listCarDetails, updateCar } from '../actions/carActions'

const CarEditPage = ({ match, history }) => {
	const carId = match.params.id
	const carModel = match.params.model
	const carBrand = match.params.brand

	const [ name, setName ] = useState('')
	const [ price, setPrice ] = useState(0)
	const [ image, setImage ] = useState('')
	const [ model, setModel ] = useState('')
	const [ brand, setBrand ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ countInStock, setCountInStock ] = useState(0)
	const [ description, setDescription ] = useState('')

	const dispatch = useDispatch()

	const carDetails = useSelector((state) => state.carDetails)
	const { loading, error, car } = carDetails

	const carUpdate = useSelector((state) => state.carUpdate)
	const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = carUpdate

	useEffect(
		() => {
			if (successUpdate) {
				dispatch({ type: 'CAR_UPDATE_RESET' })
				history.push('/admin/carlist')
			} else {
				if (!car.name || car._id !== carId) {
					dispatch(listCarDetails(carBrand, carModel))
				} else {
					setName(car.name)
					setPrice(car.price)
					setImage(car.image)
					setModel(car.model)
					setBrand(car.brand)
					setCategory(car.category)
					setCountInStock(car.countInStock)
					setDescription(car.description)
					console.log('pyah')
				}
			}
		},
		[ dispatch, history, carBrand, carModel, carId, successUpdate, car ]
	)

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
				<h1>Edit Car Info</h1>
				{loadingUpdate && <Loader />}
				{errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
				{loading ? (
					<Loader />
				) : error ? (
					<Message variant='danger'>{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId='name'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='name'
								placeholder='Enter name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='price'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter price'
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='image'>
							<Form.Label>Image</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter image url'
								value={image}
								onChange={(e) => setImage(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='model'>
							<Form.Label>Model</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter model'
								value={model}
								onChange={(e) => setModel(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='brand'>
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter brand'
								value={brand}
								onChange={(e) => setBrand(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='countInStock'>
							<Form.Label>Count In Stock</Form.Label>
							<Form.Control
								type='number'
								placeholder='Enter countInStock'
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='category'>
							<Form.Label>Category</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter category'
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							/>
						</Form.Group>

						<Form.Group controlId='description'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								type='text'
								placeholder='Enter description'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Form.Group>

						<Button type='submit' variant='primary'>
							Update
						</Button>
					</Form>
				)}
			</FormContainer>
		</div>
	)
}

export default CarEditPage
