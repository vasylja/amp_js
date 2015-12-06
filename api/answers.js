var answersService = require('../core/answers/service');

module.exports = {
    getAnswer: getAnswer,
    createAnswer: createAnswer,
    //findAnswer: findAnswer,
    updateAnswer: updateAnswer,
    removeAnswer: removeAnswer,
    queryAnswer: queryAnswer
};

function getAnswer(req, res) {
    var id = req.params.id;
    return answersService.find(id).then(function (answer) {
        res.json(answer);
    });
}

//curl -X POST 'http://localhost:3000/answers' -d '{ "question_id": 3, "user_id": 3}' -H "Content-Type: application/json" -v
function createAnswer(req, res) {
    var params = {
        choice_id: req.body.choice_id,
        question_id: req.body.question_id
    };
    return answersService.create(params).then(function (answer) {
        res.json(answer);
        res.end('Answer has been created!');
    });
}

/*function findAnswer(req, res) {
    var id = req.params.id;
    return answersService.find(id).then(function (answer) {
        res.json(answer);
        res.end('Answer has been find!');
    })
}*/

function updateAnswer(req, res) {
    var id = req.params.id;
    var answer = req.body.answer;
    var user = req.body.user;
    return answersService.update(id, answer, user).then(function (answer) {
        res.json(answer);
        res.end('Answer has been updated!');
    });
}

function removeAnswer(req, res) {
    var id = req.params.id;
    return answersService.remove(id).then(function () {
        res.json({});
        res.end('Answer has been removed!');
    });
}

function queryAnswer (req, res) {
    var params = {
        id : req.query.id,
        choice_id: req.query.choice_id,
        user_id: req.query.user_id
    };
    return answersService.query(params).then(function (answer) {
        res.json(answer);
    });
}

