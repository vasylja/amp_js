var db = require('../../db');
//var Promise = require('bluebird');
var validator = require('validator');

module.exports = {
    query: query,
    create: create,
    findAll: findAll,
    find: find,
    update: update,
    remove: remove,


};

// params = { text: 'Test name' }
function create (params) {
    if ( !validator.isLength(params.text, 2, 1000) ) {
        throw new Error('Text should be in range 2, 1000');
    }
    return db('tests').insert(params).returning('id').then(function (array) {
        return +array[0];
    });
}

function findAll () {
    //return db.select('*').from('questions');
    //return db.select( ['id', 'name'] ).from('questions');
    return db('tests');
}

function find (id) {
    //return db('questions').where('id', id); // [ { id: 1} ]
    //return db('questions').where('id', id).first(); // { id: 1 }
    return db('tests').where({ id: id }).first();
    //return db('questions').where({ id: id }).first().then(function (question) {
    //	return db('choices').where({ question_id: question.id }).then(function (choices) {
    //		question.choices = choices;
    //		return question;
    //	})
    //});
}

function update (id, test) {
    return db('tests').update(test).where({ id: id });
}

function remove (id) {
    return db('tests').del().where({ id: id });
}

// params = { id: 1 }`
function query (params) {
    var builder = db('questions');
    builder.select('*');
    if ( params.id ) {
        builder.where('id', params.id);
    }
    if ( params.name ) {
        builder.where('name', 'ilike','%'+params.name+'%');
    }
    return builder;
}

//query({'text': 'text'}).then(function (result) {
//    console.log(result);
//});

//countChoices(1).then(function (result) {
//	console.log(result);
//});
