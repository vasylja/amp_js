var db = require('../../db/index');

module.exports = {
    create: create,
    findAll: findAll,
    find: find,
    update: update,
    remove: remove,
    query: query
};

// params = { name: 'Text' }
function create (params) {
    return db('answers').insert(params).returning('id').then(function (array) {
        return +array[0];
    });
}

function findAll () {
    return db('answers');
}

function find (id) {
    return db('answers').where({ id: id }).first(); // { id: 1 }
}

function update (id, params) {
    return db('questions').where('id', params.question_id).first().then(function (question) {
        if ( !question ){
            throw new Error('No question');
        }
        return db('choices').where('id', params.choice_id).first().then(function (choice) {
            if ( !choice ) {
                throw new Error('no choice');
            }
            return db('answers').update(params).where({ id: id });// your query here (insert/delete etc)
        });
    });
}

function remove (id) {
    return db('answers').del().where({ id: id });
}

// params = { id: 1 }`
function query (params) {
    var builder = db('answers');
    builder.select('*');
    if ( params.id ) {
        builder.where('id', params.id);
    }
    if ( params.question_id ) {
        builder.where('question_id', params.question_id);
    }
    if ( params.choice_id ) {
        builder.where('choice_id', params.choice_id);
    }
    return builder;
}

query({'id': 2}).then(console.log('success'));