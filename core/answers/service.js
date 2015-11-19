var answersDal = require('../answers/dal');

module.exports = {
    create: create,
    findAll: findAll,
    find: find,
    update: update,
    remove: remove,
    query: query
};

function create (params) {
    return answersDal.create(params);
}

function find (id) {
    return answersDal.find(id);
}

function update (id, params) {
    return answersDal.update(id, params);
}

function remove (id) {
    return answersDal.remove(id);
}

function query (params) {
    return answersDal.query(params);
}

function findAll() {
    return answersDal.findAll();
}
