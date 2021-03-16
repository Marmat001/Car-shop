import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Message } from '../components/Message'
import Loader from '../components/Loader'
import { listAllCars, deleteCar, addCar } from '../actions/carActions'
import Paginate from '../components/Paginate'
import CustomTitle from '../components/CustomTitle'

const CarListPage = ({ history, match }) => {
	const pageNumber = match.params.pageNumber || 1

	const dispatch = useDispatch()

	const carList = useSelector((state) => state.carList)
	const { loading, error, cars, page, pages } = carList

	const carDelete = useSelector((state) => state.carDelete)
	const { loading: loadingDelete, error: errorDelete, success: successDelete } = carDelete

	const carAdd = useSelector((state) => state.carAdd)
	const { loading: loadingAdd, error: errorAdd, success: successAdd, car: addedCar } = carAdd

	const userLogin = useSelector((state) => state.userLogin)
	const { userInfo } = userLogin

	useEffect(
		() => {
			dispatch({ type: 'CAR_ADD_RESET' })

			if (!userInfo.isAdmin) {
				history.push('/login')
			}
			if (successAdd) {
				history.push(`/admin/vehicles/${addedCar._id}/edit`)
			} else {
				dispatch(listAllCars('', pageNumber))
			}
		},
		[ dispatch, history, userInfo, successDelete, successAdd, addedCar, pageNumber ]
	)

	const deleteHandler = (brand, model) => {
		if (window.confirm('Are you sure?')) {
			dispatch(deleteCar(brand, model))
		}
	}
	const createCarHandler = (car) => {
		dispatch(addCar())
	}

	return (
		<div>
			<Row className='align-items-center mt-5'>
				<Col>
					<h1>Cars</h1>
				</Col>
				<Col className='text-right'>
					<Button className='my-3' onClick={createCarHandler}>
						<i className='fas fa-plus' /> Create Product
					</Button>
				</Col>
			</Row>
			{loadingDelete && <Loader />}
			{errorDelete && <Message variant='danger'>{errorDelete}</Message>}
			{loadingAdd && <Loader />}
			{errorAdd && <Message variant='danger'>{errorAdd}</Message>}
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant='danger'>{error}</Message>
			) : (
				<div>
					<CustomTitle title='Car Inventory' />
					<Table striped bordered hover responsive className='table-md carlist-table'>
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
									<td>{car.category.charAt(0).toUpperCase() + car.category.slice(1)}</td>
									<td>{car.brand.charAt(0).toUpperCase() + car.brand.slice(1)}</td>
									<td>
										<LinkContainer to={`/admin/vehicles/${car._id}/${car.model}/edit`}>
											<Button variant='light' className='btn-sm'>
												<i className='fas fa-edit' />
											</Button>
										</LinkContainer>
										<Button variant='danger' className='btn-sm' onClick={() => deleteHandler(car.brand, car.model)}>
											<i className='fas fa-trash-alt' />
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
