import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import shopData from './data/shopData.js'

dotenv.config()

connectDB()

const app = express()

const carBrands = shopData.map((data) => data.cars.map((car) => car))
const cars = [ ...carBrands[0], ...carBrands[1], ...carBrands[2], ...carBrands[3], ...carBrands[4], ...carBrands[5] ]

app.get('/', (req, res) => {
	res.send('API is running...')
})

app.get('/api/vehicles/bmw', (req, res) => {
	res.json(shopData[0].cars)
})

app.get('/api/vehicles/bmw/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

app.get('/api/vehicles/mercedes', (req, res) => {
	res.json(shopData[1].cars)
})

app.get('/api/vehicles/mercedes/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

app.get('/api/vehicles/audi', (req, res) => {
	res.json(shopData[2].cars)
})

app.get('/api/vehicles/audi/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

app.get('/api/vehicles/mclaren', (req, res) => {
	res.json(shopData[3].cars)
})

app.get('/api/vehicles/mclaren/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

app.get('/api/vehicles/ferrari', (req, res) => {
	res.json(shopData[4].cars)
})

app.get('/api/vehicles/ferrari/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

app.get('/api/vehicles/lamborghini', (req, res) => {
	res.json(shopData[5].cars)
})

app.get('/api/vehicles/lamborghini/:model', (req, res) => {
	const car = cars.find((c) => c.model === req.params.model)
	res.json(car)
})

// app.get('/api/vehicles/:/:model', (req, res) => {
// 	res.json(cars)
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
