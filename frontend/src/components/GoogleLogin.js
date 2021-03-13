import React from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'

const Google = ({ informParent = (f) => f }) => {
	const googleResponse = (response) => {
		axios({
			method: 'POST',
			url: '/api/users/google-login',
			data: { idToken: response.tokenId }
		})
			.then((response) => {
				console.log('GOOGLE SIGNIN SUCCESS', response)
				informParent(response)
			})
			.catch((error) => {
				console.log('GOOGLE SIGNIN ERROR', error.response)
			})
	}
	return (
		<div className='pt-3 pb-3'>
			<GoogleLogin
				clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
				onSuccess={googleResponse}
				onFailure={googleResponse}
				render={(renderProps) => (
					<button
						onClick={renderProps.onClick}
						disabled={renderProps.disabled}
						className='btn btn-danger btn-lg btn-block'
					>
						<i className='fab fa-google pr-2 pt-2 pb-2' /> Login with Google
					</button>
				)}
				cookiePolicy={'single_host_origin'}
			/>
		</div>
	)
}

export default Google
