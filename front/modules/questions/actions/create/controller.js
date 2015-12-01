angular.module('app').controller('CreateQuestionController', [
    '$scope', '$routeParams', 'CreateQuestionService',
    function ($scope, $routeParams, CreateQuestionService) {
        $scope.question = {
            text: '',
            choices: []
        };
        $scope.addChoice = function() {
            $scope.question.choices.push({});
        };
        $scope.save = function(question) {
            CreateQuestionService.save(question);
        }
    }
]);

