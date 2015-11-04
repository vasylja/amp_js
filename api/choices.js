var choicesService = require('../core/choices/service');

module.exports = {
    getChoice: getChoice,
    createChoice: createChoice,
    updateChoice: updateChoice,
    removeChoice: removeChoice,
    removeByQuestionId: removeByQuestionId,
    queryChoice: queryChoice,
};

function getChoice(req, res) {
    var id = req.params.id;
    return choicesService.find(id).then(function (choice) {
        res.json(choice);
    });
}

function createChoice(req, res) {
    var params = {
        id : req.params.id,
        name: req.params.name,
        question_id: req.params.question_id,
    };
    return choicesService.create(params).then(function () {
        res.end('Choice has been created!');
    });
}

function updateChoice(req, res) {
    var id = req.params.id;
    var choice = req.params.choice;
    return choicesService.update(id, choice).then(function () {
        res.end('Choice has been updated!');
    });
}

function removeChoice(req, res) {
    var id = req.params.id;
    return choicesService.remove(id).then(function () {
        res.end('Choice has been removed!');
    });
}

function removeByQuestionId(req, res) {
    var id = req.params.id;
    return choicesService.removeByQuestionId(id).then(function () {
        res.end('Choices have been removed!');
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
