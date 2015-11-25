var questionsService = require('../core/questions/service');

module.exports = {
    createQuestion: createQuestion,
};

//curl -X POST 'http://localhost:3000/questions' -d '{ "text": "Question 105", "choices": [{"text":"one 105"}, {"text": "two 105"}, {"text": "three 105"} ]}' -H "Content-Type: application/json" -v

function createQuestion(req, res) {
    // req.params ( choices/:id ) = id
    // req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
    // req.body ( form, json )
    var params = {
        text: req.body.text,
        choices: req.body.choices,
    };
    return questionsService.create(params).then(function () {
        res.end('Question has been created!');
    });
}
