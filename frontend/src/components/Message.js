import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
	return <Alert variant={variant}>{children}</Alert>
}

const FadeMessage = ({ variant, children }) => {
	return (
		<Alert className='message-animation' variant={variant}>
			{children}
		</Alert>
	)
}

Message.defaultProps = {
	variant: 'info'
}

FadeMessage.defaultProps = {
	variant: 'info'
}

export { Message, FadeMessage }
