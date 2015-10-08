var db = require('../db');

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
    return db('choices').insert(params); // []
}

function findAll () {
    //return db.select('*').from('choices');
    //return db.select( ['id', 'name'] ).from('choices');
    return db('answers');
}

function find (id) {
    return db('answers').where({ id: id }).first(); // { id: 1 }
}

function update (id, answer) {
    return db('answers').update(answer).where({ id: id });
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

create({'id': 1, 'question_id': 1, 'choice_id': 1}).then(console.log('success'));
