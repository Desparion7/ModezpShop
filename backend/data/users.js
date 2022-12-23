import bcrypt from 'bcryptjs';
const users = [
	{
		name: 'Admin User',
		email: 'admin@exaple.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Jan Nowak',
		email: 'john@exaple.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Anna Wilk',
		email: 'annawilk@exaple.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
