var db = require('../../db');
var validator = require('validator');

module.exports = {
    create: create,
    findAll: findAll,
    find: find,
    update: update,
    remove: remove,
    removeByQuestionId: removeByQuestionId,
    query: query
};

// params = { name: 'Text' }
function create (params) {
    if ( !validator.isLength(params.text, 1, 1000) ) {
        throw new Error('Text should be in range 1, 1000');
    }
    return db('choices').insert(params).returning('id').then(function (array) {
        return +array[0];
    });
}

//do not need
//function findAll () {
//    //return db.select('*').from('choices');
//    //return db.select( ['id', 'name'] ).from('choices');
//    return db('choices');
//}

function find (id) {
    return db('choices').where({ id: id }).first(); // { id: 1 }
}

function update (id, choice) {
    return db('choices').update(choice).where({ id: id });
}

function remove (id) {
    return db('choices').del().where({ id: id });
}
function removeByQuestionId (questionId) {
    return db('questions').del().where({ question_id: questionId });
}

// params = { id: 1 }
function query (params) {
    var builder = db('choices');
    builder.select('*');
    if ( params.id ) {
        builder.where('id', params.id);
    }
    if ( params.question_id ) {
        builder.where('question_id', params.question_id);
    }
    if ( params.text && !validator.isLength(params.text, 1) ) {
        builder.where('text', 'ilike','%'+params.text+'%');
    }
    return builder;
}

//query({'id': 2}).then(function (result) {
//    console.log(result);
//});
