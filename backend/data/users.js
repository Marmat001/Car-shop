import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		image: '',
		password: bcrypt.hashSync('1234', 10),
		isAdmin: true
	},
	{
		name: 'Johnny Bravo',
		email: 'johnny@example.com',
		image: '',
		password: bcrypt.hashSync('1234', 10)
	},
	{
		name: 'Adriana Lewis',
		email: 'adriana@example.com',
		image: '',
		password: bcrypt.hashSync('1234', 10)
	}
]

export default users
