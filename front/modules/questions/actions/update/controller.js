angular.module('app').controller('UpdateQuestionController', [
    '$scope', '$routeParams', 'UpdateQuestionService', 'FindQuestionService',
    function ($scope, $routeParams, UpdateQuestionService, FindQuestionService) {
        $scope.question = FindQuestionService.get({qId: $routeParams.id});
        $scope.save = function(question) {
            UpdateQuestionService.update({id: $routeParams.id}, question);
        }
    }
]);
