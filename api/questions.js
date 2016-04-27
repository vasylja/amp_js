var questionsService = require('../core/questions/service');

module.exports = {
    createQuestion: createQuestion,
    getQuestions: getQuestions,
    updateQuestion: updateQuestion,
    getQuestion: getQuestion,
    getStatistic: getStatistic,
    removeQuestion: removeQuestion
    
};

//curl -X POST 'http://localhost:3000/questions' -d '{ "text": "Question 105", "choices": [{"text":"one 105"}, {"text": "two 105"}, {"text": "three 105"} ]}' -H "Content-Type: application/json" -v
function createQuestion(req, res) {
    // req.params ( choices/:id ) = id
    // req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
    // req.body ( form, json )
    var params = {
        text: req.body.text,
        choices: req.body.choices,
		test_id: req.test.id
    };
    return questionsService.create(params).then(function () {
        res.end('Question has been created!');
    });
}

// curl 'http://localhost:3000/questions' "Content-Type: application/json" -v
function getQuestions(req, res) {
	var queryParams = {
		test_id: req.test.id
	};
    return questionsService.query(queryParams).then(function (questions) {
        res.json(questions);
    });
}

function updateQuestion(req, res) {
    var question = req.body;
    return questionsService.update(question).then(function (question) {
        res.json(question);
        res.end('Question has been updated!');
    });
}

function getQuestion(req, res) {
    var id = req.params.id;
    return questionsService.find(id).then(function (questions) {
        res.json(questions);
    });
}

function getStatistic(req, res) {
    var id = req.params.id;
    return questionsService.countChoices(id).then(function (statistic) {
        res.json(statistic);
    });
}

function removeQuestion(req, res) {
    var id = req.params.id;
    return questionsService.remove(id).then(function () {
        res.json({});
        res.end('Choice has been removed!');
    });
}
