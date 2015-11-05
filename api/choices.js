var choicesService = require('../core/choices/service');

module.exports = {
    getChoice: getChoice,
    createChoice: createChoice,
    updateChoice: updateChoice,
    removeChoice: removeChoice,
    removeByQuestionId: removeByQuestionId,
    queryChoices: queryChoices,
};

function getChoice(req, res) {
    var id = req.params.id;
    return choicesService.find(id).then(function (choice) {
        res.json(choice);
    });
}

function createChoice(req, res) {
	// req.params ( choices/:id ) = id
	// req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
	// req.body ( form, json )
    var params = {
        id : req.params.id,
        name: req.body.name,
        question_id: req.body.question_id,
    };
    return choicesService.create(params).then(function () {
		// return created entity
        res.end('Choice has been created!');
    });
}

function updateChoice(req, res) {
    var id = req.params.id;
    var choice = req.params.choice;
    return choicesService.update(id, choice).then(function () {
		// return updated entity
        res.end('Choice has been updated!');
    });
}

function removeChoice(req, res) {
    var id = req.params.id;
    return choicesService.remove(id).then(function () {
		res.json({});
        //res.end('Choice has been removed!');
    });
}

function removeByQuestionId(req, res) {
    var id = req.query.question_id;
    return choicesService.removeByQuestionId(id).then(function () {
        res.end('Choices have been removed!');
    });
}

function queryChoices (req, res) {
	var params = {
        id : req.query.id,
        name: req.query.name,
        question_id: req.query.question_id
	}
	return choicesService.query(params).then(function (choices) {
		res.json(choices);
	});
}

function queryChoice(req, res) {
    var params = {
        id : req.params.id,
        name: req.params.name,
        question_id: req.params.question_id,
    };
    return choicesService.queryChoice(params).then(function (choice) {
        res.json(choice);
    });
}
