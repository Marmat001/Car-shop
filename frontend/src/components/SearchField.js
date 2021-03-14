import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchField = ({ history }) => {
	const [ word, setWord ] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		if (word.length > 0) {
			if (word.trim()) {
				history.push(`/vehicles/search/inventory/${word}`)
			} else {
				history.push('/')
			}
		}
	}

	return (
		<Form id='form-inline' onSubmit={submitHandler} inline>
			<Form.Control
				id='searchinput'
				type='text'
				name='q'
				onChange={(e) => setWord(e.target.value)}
				placeholder='Search Cars...'
				className='mr-sm-2 ml-sm-5'
			/>
			<Button type='submit' variant='dark' className='p-2'>
				Search
			</Button>
		</Form>
	)
}

export default SearchField
