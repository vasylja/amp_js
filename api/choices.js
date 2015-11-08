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

//curl -X POST 'http://localhost:3000/choices' -d '{ "question_id": 3, "text": "something"}' -H "Content-Type: application/json" -v
function createChoice(req, res) {
	// req.params ( choices/:id ) = id
	// req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
	// req.body ( form, json )
    var params = {
        text: req.body.text,
        question_id: req.body.question_id,
    };
    return choicesService.create(params).then(function () {
        res.json(choice);
        res.end('Choice has been created!');
    });
}

//curl -XPUT 'http://localhost:3000/choices/1' -d '{"choice": {"text":"new text 44"}}' -H "Content-Type: application/json" -v
function updateChoice(req, res) {
    var id = req.params.id;
    var choice = req.body.choice;
    return choicesService.update(id, choice).then(function (choice) {
        res.json(choice);
        res.end('Choice has been updated!');
    });
}

// curl -X DELETE 'http://localhost:3000/choices/148' "Content-Type: application/json" -v
function removeChoice(req, res) {
    var id = req.params.id;
    return choicesService.remove(id).then(function () {
		res.json({});
        res.end('Choice has been removed!');
    });
}

// curl -X DELETE 'http://localhost:3000/choices?question_id=2' "Content-Type: application/json" -v
function removeByQuestionId(req, res) {
    var id = req.query.question_id;
    return choicesService.removeByQuestionId(id).then(function () {
        res.end('Choices have been removed!');
    });
}

// curl 'http://localhost:3000/choices?question_id=3' "Content-Type: application/json" -v
function queryChoices (req, res) {
	var params = {
        id : req.query.id,
        name: req.query.name,
        question_id: req.query.question_id
	};
	return choicesService.query(params).then(function (choices) {
		res.json(choices);
	});
}
