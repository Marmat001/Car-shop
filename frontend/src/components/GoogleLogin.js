import React from 'react'
import axios from 'axios'
import GoogleLogin from 'react-google-login'
import { toast } from 'react-toastify'

const Google = ({ informParent = (f) => f }) => {
	const googleResponse = (response) => {
		axios({
			method: 'POST',
			url: '/api/users/google-login',
			data: { idToken: response.tokenId }
		})
			.then((response) => {
				informParent(response)
			})
			.catch((error) => {
				toast.error(error.response)
			})
	}
	return (
		<div className='pt-3 pb-3'>
			<GoogleLogin
				clientId={`373275282129-0k3mfcc4plr019jun1vfn7pt63fqpt6c.apps.googleusercontent.com`}
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
