// DAL module of the users table. In must provide CRUD interface to work with real data (database in our case)
// We use it with knex library
// More on knex here - http://knexjs.org/
var db = require('../../db');
// Very helpful library
// More on functions https://lodash.com/docs
var _ = require('lodash');

// here we expose public api
module.exports = {
	create: create,
	findAll: findAll,
	find: find,
	findByEmail: findByEmail,
	update: update,
	remove: remove,
	query: query
};

// email, name
function create (params) {
	// get name and email properties from params object
	var insertParams = _.pick(params, ['name', 'email', 'password']);
	// after line above we are sure that we get clean insert object (only email and name fields)
	return db('users').insert(insertParams).returning('id').then(_.first); // here we return id as string
}
function findAll () {
	return db('users');
}
function find (id) {
	// Here we use view ( for more information );
	return db('v_users').where('id', id).first();
}
function findByEmail (email) {
	return db('v_users').where('email', email).first();
}
function update (id, params) {
	// same as for insert
	var updateParams = _.pick(params, ['name', 'email']);
	return db('users').update(updateParams).where({ id: id }).returning('id').then(_.first);
}
function remove (id) {
	return db('users').del().where({ id: id });
}
function query (params) {
	// we cache builder
	var builder = db('users');
	if ( params.email ) {
		builder.where('email', params.email);
	}
	if ( params.name ) {
		builder.where('name', 'ilike', params.name);
	}
	if ( params.limit ) {
		builder.limit(params.limit);
	}
	if ( params.offset ) {
		builder.offset(params.offset);
	}
	// to view sql query you should do
	// console.log(builder.toString());
	// builder is executed after query().then() call ( after promise resolving. not after returning )
	return builder;
}

//function findUserQuestions (id){
//
//}


// to test this i usually add function call on the bottom of the file and then delete it
// example
//create({ name: 'The God', email: 'alex.coockoo@gmail.com' }).then(function (result) {
//	console.log(result);
//});
// to call it ill do this
// node core/users/dal
