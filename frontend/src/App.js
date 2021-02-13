import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import BmwPage from './pages/BmwPage'
import MercedesPage from './pages/MercedesPage'
import AudiPage from './pages/AudiPage'
import MclarenPage from './pages/MclarenPage'
import FerrariPage from './pages/FerrariPage'
import LamborghiniPage from './pages/LamborghiniPage'
import CarPage from './pages/CarPage'
import ScrollTop from './components/ScrollTop'
import CheckoutPage from './pages/CheckoutPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import ShippingPage from './pages/ShippingPage'
import PaymentPage from './pages/PaymentPage'
import OrderPage from './pages/OrderPage'
import OrderSummaryPage from './pages/OrderSummaryPage'
import UserListPage from './pages/UserListPage'
import EditUserPage from './pages/EditUserPage'
import CarListPage from './pages/CarListPage'
import CarEditPage from './pages/CarEditPage'
import OrderListPage from './pages/OrderListPage'

const App = () => {
	return (
		<Router>
			<ScrollTop />
			<Navigation />
			<main className='py-4'>
				<Container fluid>
					<Route path='/' component={HomePage} exact />
					<Route path='/login' component={LoginPage} />
					<Route path='/shipping' component={ShippingPage} />
					<Route path='/payment' component={PaymentPage} />
					<Route path='/placeorder' component={OrderPage} />
					<Route path='/order/:id' component={OrderSummaryPage} />
					<Route path='/admin/userlist' component={UserListPage} />
					<Route path='/admin/user/:id/edit' component={EditUserPage} />
					<Route path='/admin/carlist' component={CarListPage} />
					<Route path='/admin/vehicles/:id/:model?/edit' component={CarEditPage} />
					<Route path='/admin/orderlist' component={OrderListPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/profile' component={ProfilePage} />
					<Route path='/vehicles' component={ShopPage} exact />
					<Route path='/vehicles/bmw' component={BmwPage} exact />
					<Route path='/vehicles/bmw/:model' component={CarPage} />
					<Route path='/vehicles/mercedes' component={MercedesPage} exact />
					<Route path='/vehicles/mercedes/:model' component={CarPage} />
					<Route path='/vehicles/audi' component={AudiPage} exact />
					<Route path='/vehicles/audi/:model' component={CarPage} />
					<Route path='/vehicles/mclaren' component={MclarenPage} exact />
					<Route path='/vehicles/mclaren/:model' component={CarPage} />
					<Route path='/vehicles/ferrari' component={FerrariPage} exact />
					<Route path='/vehicles/ferrari/:model' component={CarPage} />
					<Route path='/vehicles/lamborghini' component={LamborghiniPage} exact />
					<Route path='/vehicles/lamborghini/:model' component={CarPage} />
					<Route path='/cart/:model?' component={CheckoutPage} />
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
