import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image, Row, Col } from 'react-bootstrap'
import CarBrandPreview from '../components/CarBrandPreview'
import Typewriter from '../components/TypeWriter'
import cars from '../cars'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Loader from '../components/Loader'
import { Message } from '../components/Message'
import { listTopCars } from '../actions/carActions'
import CustomTitle from '../components/CustomTitle'

const ShopPage = () => {
  const dispatch = useDispatch()

  const carTopRated = useSelector((state) => state.carTopRated)
  const { loading, error, cars: carsTopRated } = carTopRated

  useEffect(() => {
    dispatch(listTopCars())
  }, [dispatch])


  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <CustomTitle title='Vehicles' />

      <div className='py-5 pb-4 text-center tertiary-heading jumbotron'>
        <Typewriter
          text={[
            'New Arrivals every week',
            'Only the most exclusive brands',
            'The effort-free way to buy a car',
            'We deliver what we promise',
            'Cars that have a passion for the road',
          ]}
        />
      </div>
      <Carousel
        autoPlay={true}
        interval={2500}
        pause='hover'
        className='bg-dark'
      >
        {carsTopRated.map((car) => (
          <Carousel.Item key={car._id}>
            <Link to={`/vehicles/${car.brand}/${car.model}`}>
              <Image src={car.image} alt={car.name} fluid />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
      <h1 className='py-3 pb-4 text-center car-heading'>Latest Additions</h1>

      <div>
        <h1 className='py-4 pt-5 car-heading'>Our Car Selection</h1>
        <Row>
          {cars.map((car) => (
            <Col key={uuidv4()} sm={12} md={6} lg={4}>
              <CarBrandPreview car={car} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}

export default ShopPage
