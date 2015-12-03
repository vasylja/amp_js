angular.module('app').controller('UpdateQuestionController', [
    '$scope', '$routeParams', '$window','UpdateQuestionService', 'FindQuestionService',
    function ($scope, $routeParams,$window, UpdateQuestionService, FindQuestionService) {
        $scope.question = FindQuestionService.get({qId: $routeParams.id});
        $scope.removeChoice = function(choice) {
            $scope.question.choices.forEach(function(item, i, arr) {
                console.log(item);
                console.log(choice);
                if(item===choice) {
                    arr.splice(i, 1);
                }
            });
        };
        $scope.save = function(question) {
            UpdateQuestionService.update({id: $routeParams.id}, question);
            $window.location.href = '/#/questions';
        }
    }
]);
