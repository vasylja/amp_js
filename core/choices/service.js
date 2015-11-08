var choicesDal = require('../choices/dal');

var Promise = require('bluebird');

module.exports = {
    create: create,
    //findAll: findAll,
    find: find,
    update: update,
    remove: remove,
    removeByQuestionId: removeByQuestionId,
    query: query
};

// { text, choices[] = { text } }
function create (params) {
    return choicesDal.create(params);
}

function find (id) {
    return choicesDal.find(id);
}

function update (id, choice) {
    return choicesDal.update(id, choice);
}

function remove (id) {
    return choicesDal.remove(id);
}

function removeByQuestionId (questionId) {
    return choicesDal.removeByQuestionId(questionId);
}

function query (params) {
    return choicesDal.query(params);
}

// do not need
//function findAll () {
//    return choicesDal.findAll();
//}