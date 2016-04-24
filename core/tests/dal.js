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
    if ( !validator.isLength(params.name, 2, 1000) ) {
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

    // var builder = db('tests');
    // builder.where('id', id);
    // return builder;
    return db('tests').where({ id: id }).first();

}

function update (id, test) {
    return db('tests').update(test).where({ id: id });
}

function remove (id) {
    return db('tests').del().where({ id: id });
}

// params = { id: 1 }`
function query (params) {
    var builder = db('v_tests');
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
