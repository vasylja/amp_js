var testsDal = require('./dal');
var questionsDal = require('../questions/dal');
var choicesDal = require('../choices/dal');

var Promise = require('bluebird');

module.exports = {
    create: create,
    findAll: findAll,
    find: find,
    update: update,
    remove: remove,
    query: query,

};
// { text, user_id, choices[] = { text } }
function create (params) {
    //1. create test
    // 2. create all questions`
    // 3. create all choices
    return questionsDal.create({ name: params.name, user_id: params.user_id }).then(function (testId) {
        var promises = params.questions.map(function (question) {
            return questionDal.create({ text: question.text, test_id: testId }).then(function(questionId){
                return choicesDal.create({ text: choice.text, question_id: questionId })
            });
        });
        return Promise.all(promises).then(function () {
            return testsDal.find(testId);
        });
    });
}

function find (id) {
    return testsDal.find(id);
}
function findAll () {
    return testsDal.findAll();
}
function update (id, params) {
    return testsDal.update(id, params);
}
function remove (id) {
    return testsDal.remove(id);
}
