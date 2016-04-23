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
    // 1. create test
    // 2. create all questions`
    // 3. create all choices for the appropriate question
    
    return testsDal.create({ name: params.name, user_id: params.user_id }).then(function (testId) {
        var questionsPromises = params.questions.map(function (question) {
            return questionsDal.create({ text: question.text, test_id: testId }).then(function(questionId){
                var choicesPromises = question.choices.map(function (choice) {
                    return choicesDal.create({ text: choice.text, question_id: questionId })
                });
                return Promise.all(choicesPromises);
            });
        });
        return Promise.all(questionsPromises).then(function () {
            return testsDal.find(testId);
        });
    });
}
function update (params) {
    return  testsDal.update(params.id, { name: params.name }).then(function () {
            var questionsPromises = params.questions.map(function (question) {
                if (question.id != null) {
                    return questionsDal.update(question.id,{ text: question.text, test_id: params.id }).then(function(){
                        var choicesPromises=question.choices.map(function (choice) {
                            if (choice.id != null) {
                                return choicesDal.update(choice.id,{ text: choice.text, question_id: question.id });
                            } else {
                                return choicesDal.create({ text: choice.text, question_id: question.id });
                            }
                        });
                        return Promise.all(choicesPromises).then(function () {
                            return questionsDal.find(question.id);
                        });
                    });
                } else {
                    return questionsDal.create({ text: question.text, test_id: params.id }).then(function(){
                        var choicesPromises=question.choices.map(function (choice) {
                            if (choice.id != null) {
                                return choicesDal.update(choice.id,{ text: choice.text, question_id: question.id });
                            } else {
                                return choicesDal.create({ text: choice.text, question_id: question.id });
                            }
                        });
                        return Promise.all(choicesPromises).then(function () {
                            return questionsDal.find(question.id);
                        });
                    });
                }
            });
            return Promise.all(questionsPromises).then(function () {
                return questionsDal.find(params.id);
            });
        });
}

function find (id) {
    return testsDal.find(id);
}
function findAll () {
    return testsDal.findAll();
}

function remove (id) {
    return testsDal.remove(id);
}
function query (params) {
    return questionsDal.query(params);
}
