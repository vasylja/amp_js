angular.module('app').controller('UpdateQuestionController', [
    '$scope', '$routeParams', '$window','UpdateQuestionService', 'FindQuestionService',
    function ($scope, $routeParams,$window, UpdateQuestionService, FindQuestionService) {
        $scope.question = FindQuestionService.get({qId: $routeParams.id});
        $scope.removeChoice = function(choice) {
            $scope.question.choices.forEach(function(item, i, arr) {
                if(item===choice) {
                    arr.splice(i, 1);
                }
            });
        };
        $scope.addChoice = function() {
            if($scope.question.choices == null) {
                $scope.question.choices = [];
            }
            $scope.question.choices.push({});
        };
        $scope.save = function(question, isValid) {
            $scope.submitted = true;
            if(isValid) {
                UpdateQuestionService.update({id: $routeParams.id}, question);
                $window.location.href = '/#/questions';
            }
        }
    }
]);
