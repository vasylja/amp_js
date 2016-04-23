var testsService = require('../core/tests/service');

module.exports = {
    createTest: createTest,
    getTests: getTests,
    updateTest: updateTest,
    getTest: getTest,

};

//curl -X POST 'http://localhost:3000/questions' -d '{ "text": "Question 105", "choices":
// [{"text":"one 105"}, {"text": "two 105"}, {"text": "three 105"} ]}' -H "Content-Type: application/json" -v
function createTest(req, res) {
    // req.params ( choices/:id ) = id
    // req.query ( choices?limit=10&offset=20 ) = { limit: 10, offset: 20 }
    // req.body ( form, json )
    var params = {
        name: req.body.name,
        questions: req.body.questions,
        // choices: req.body.choices,
        user_id: req.user.id
    };
    return testsService.create(params).then(function () {
        res.end('Test has been created!');
    });
}


function getTests(req, res) {
    var queryParams = {
        user_id: req.user.id
    };
    return testsService.query(queryParams).then(function (tests) {
        res.json(tests);
    });
}

function updateTest(req, res) {
    var test = req.body;
    return testsService.update(test).then(function (test) {
        res.json(test);
        res.end('Test has been updated!');
    });
}

function getTest(req, res) {
    var id = req.params.id;
    return testsService.find(id).then(function (tests) {
        res.json(tests);
    });
}
