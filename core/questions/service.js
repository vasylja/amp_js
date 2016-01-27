var questionsDal = require('./dal');
var choicesDal = require('../choices/dal');

var Promise = require('bluebird');

module.exports = {
	create: create,
	findAll: findAll,
	find: find,
	update: update,
	remove: remove,
	query: query,
	countChoices: countChoices

};
// { text, choices[] = { text } }
function create (params) {
	// 1. create question`
	// 2. create all choices
	return questionsDal.create({ text: params.text }).then(function (questionId) {
		var promises = params.choices.map(function (choice) {
			return choicesDal.create({ text: choice.text, question_id: questionId });
		});
		return Promise.all(promises).then(function () {
			return questionsDal.find(questionId);
		});
	});
}
// { id, text, choices[] = { text } }
//function update (params) {
//	return questionsDal.update(params.id, { text: params.text }).then(function () {
//		return choicesDal.removeByQuestionId(params.id).then(function () {
//			var promises = params.choices.map(function (choice) {
//				return choicesDal.create({ text: choice.text, question_id: params.id });
//			});
//			return Promise.all(promises).then(function () {
//				return questionsDal.find(params.id);
//			});
//		});
//	});
//}

function update (params) {
	return  questionsDal.update(params.id, { text: params.text })
		.then(function () {
			var promises = params.choices.map(function (choice) {
				if (choice.id != null) {
					return choicesDal.update(choice.id,{ text: choice.text, question_id: params.id });
				} else {
					return choicesDal.create({ text: choice.text, question_id: params.id });
				}
			});
			return Promise.all(promises).then(function () {
				return questionsDal.find(params.id);
			});
	});
}

function find (id) {
	return questionsDal.find(id);
}

function remove (id) {
	return questionsDal.remove(id);
}

function query (params) {
	return questionsDal.query(params);
}
function findAll () {
    return questionsDal.findAll();
}
function countChoices(id){
	return questionsDal.countChoices(id);
}