var usersService = require('../core/users/service');
var config = require('../config');
var jwt = require('jsonwebtoken');

module.exports = {
	getUsers: getUsers,
	getUser: getUser,
	createUser: createUser,
	updateUser: updateUser,
	deleteUser: deleteUser,
	authenticate: authenticate
};

function getUsers (req, res) {
	// req.query for pagination, filters etc
	//return list of users ( collection of enities )
	return usersService.findAll().then(function (users) {
		res.json(users);
	});
}

function getUser (req, res) {
	var id = req.params.id;
	//var query = req.query;
	//console.log(id);
	//console.log('query', query);
	//res.json({ id: id, name: 'This is my name' });

	// return single item in collection by id
	return usersService.find(id).then(function (user) {
		res.json(user);
	});
}

// Registration
function createUser (req, res) {
	var userToCreate = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	};
	return usersService.create(userToCreate);
}

function updateUser (req, res) {
	// delete user by id
	console.log(req.params);
	console.log(req.query);
	console.log(req.body);
	res.json({});
}

function deleteUser () {
	// delete single user
}

function authenticate (req, res) {
	var authParams = {
		email: req.body.email,
		password: req.body.password
	};
	return usersService.authenticate(authParams).then(function (user) {
		if ( !user ) {
			res.status(401).json({ 'error': 'Invalid credentials' });
			return;
		}
		var token = jwt.sign(user, config.jwtSecret);
		res.status(200).json({ token: token, user: user });
	});
}
