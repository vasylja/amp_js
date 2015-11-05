var usersService = require('../core/users/service');

module.exports = {
	getUsers: getUsers,
	getUser: getUser,
	createUser: createUser,
	updateUser: updateUser,
	deleteUser: deleteUser
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

function createUser (req, res) {
	// create user and return created entity
	
	// req.params ( choices/:id ) = id
	// req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
	// req.body ( form, json )
	console.log(req.params);
	console.log(req.query);
	console.log(req.body);
	res.json({});

}

function updateUser (req, res) {
	// update user by id
	console.log(req.params);
	console.log(req.query);
	console.log(req.body);
	res.json({});
}

function deleteUser () {
	// delete single user
}
