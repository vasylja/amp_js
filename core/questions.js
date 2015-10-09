var db = require('../db');
//var Promise = require('bluebird');

module.exports = {
	create: create,
	findAll: findAll,
	find: find,
	update: update,
	remove: remove
};

// params = { name: 'Test name' }
function create (params) {
	return db('questions').insert(params).returning('id').then(function (array) {
		return +array[0];
	});
}

function findAll () {
	//return db.select('*').from('questions');
	//return db.select( ['id', 'name'] ).from('questions');
	return db('questions');
}

function find (id) {
	//return db('questions').where('id', id); // [ { id: 1} ]
	//return db('questions').where('id', id).first(); // { id: 1 }
	return db('questions').where({ id: id }).first().then(function (question) {
		return db('choices').where({ question_id: question.id }).then(function (choices) {
			question.choices = choices;
			return question;
		})
	});
}

function update (id, question) {
	return db('questions').update(question).where({ id: id });
}

function remove (id) {
	return db('questions').del().where({ id: id });
}

// params = { id: 1 }`
function query (params) {
	var builder = db('questions');
	builder.select('*');
	if ( params.id ) {
		builder.where('id', params.id);
	}
	if ( params.text ) {
		builder.where('text', 'ilike','%'+params.text+'%');
	}
	return builder;
}

//query({'text': 'text'}).then(function (result) {
//    console.log(result);
//});
