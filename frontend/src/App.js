import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'

const App = () => {
	return (
		<Router>
			<Navigation />
			<main className='py-4'>
				<Container fluid>
					<Route path='/' component={HomePage} exact />
					<Route path='/vehicles' component={ShopPage} />
					{/* <Route path='/vehicles/bmw' component={BmwPage} /> */}
				</Container>
			</main>
			<Footer />
		</Router>
	)
}

export default App
