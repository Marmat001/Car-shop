import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listCars, deleteCar, createCars } from '../actions/carActions'

const CarListPage = ({ history, match }) => {
	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const carsList = useSelector((state) => state.carsList)
	const { loading, error, Cars, page, pages } = carsList

	const carsDelete = useSelector((state) => state.carsDelete)
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = carsDelete

	const carsCreate = useSelector((state) => state.carsCreate)
	const { loading: loadingCreate, error: errorCreate, success: successCreate, Cars: createdCars } = carsCreate

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(
		() => {
			dispatch({ type: 'CAR_CREATE_RESET' })

			if (!userInfo || !userInfo.isAdmin) {
				history.push('/login')
			}

			if (successCreate) {
				history.push(`/admin/car/${createdCars._id}/edit`)
			} else {
				dispatch(listCars('', pageNumber))
			}
		},
		[ dispatch, history, userInfo, successDelete, successCreate, createdCars, pageNumber ]
	)

	const deleteHandler = (id, brand) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteCar(id, brand))
		}
	}

	const createCarHandler = () => {
		dispatch(createCar())
	}

	return (
		<div>
			<Row className='align-items-center'>
				<Col>
					<h1>Cars</h1>
				</Col>
				<Col className='text-right'>
					<Button className='my-3' onClick={createCarHandler}>
						<i className='fas fa-plus' /> Create Car
					</Button>
				</Col>
			</Row>
			{loadingDelete && <Loader />}
			{errorDelete && <Message variant='danger'>{errorDelete}</Message>}
			{loadingCreate && <Loader />}
			{errorCreate && <Message variant='danger'>{errorCreate}</Message>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<Table striped bordered hover responsive className='table-sm'>
						<thead>
							<tr>
								<th>ID</th>
								<th>NAME</th>
								<th>PRICE</th>
								<th>CATEGORY</th>
								<th>BRAND</th>
								<th />
							</tr>
						</thead>
						<tbody>
							{cars.map((car) => (
								<tr key={car._id}>
									<td>{car._id}</td>
									<td>{car.name}</td>
									<td>${car.price}</td>
									<td>{car.category}</td>
									<td>{car.brand}</td>
									<td>
										<LinkContainer to={`/admin/car/${car._id}/edit`}>
											<Button variant='light' className='btn-sm'>
												<i className='fas fa-edit' />
											</Button>
										</LinkContainer>
										<Button variant='danger' className='btn-sm' onClick={() => deleteHandler(car._id)}>
											<i className='fas fa-trash' />
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<Paginate pages={pages} page={page} isAdmin={true} />
				</div>
			)}
		</div>
	)
}

export default CarListPage
