var bcrypt = require('bcrypt');
var usersDAL = require('./dal');

module.exports = {
	// crud methods
	create: create,
	find: find,
	findAll: findAll,
	update: update,
	remove: remove,

	// custom methods used in our application
	authenticate: authenticate
};

function create (params) {
	// TODO: replace stub with bcrypt
	//params.password = hash(params.password);
	return usersDAL.create(params);
}

function find (id) {
	return usersDAL.find(id);
}
function findAll () {
	return usersDAL.findAll();
}
function update (id, params) {
	return usersDAL.update(id, params);
}
function remove (id) {
	return usersDAL.remove(id);
}


function authenticate (user) {
	return usersDAL.findByEmail(user.email).then(function (databaseUser) {
		// todo :replace this with password
		// TODO: replace stub with bcrypt .compare() or smth
		if ( databaseUser.password === user.password ) {
			return databaseUser;
		} else {
			return null;
		}
	});
}
