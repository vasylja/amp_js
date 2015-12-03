angular.module('app').controller('CreateQuestionController', [
    '$scope', '$routeParams','$window' , 'CreateQuestionService',
    function ($scope, $routeParams, $window, CreateQuestionService) {
        $scope.question = {
            text: '',
            choices: []
        };
        $scope.addChoice = function() {
            $scope.question.choices.push({});
        };
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
            CreateQuestionService.save(question);
            $window.location.href = '/#/questions';
        }
    }
]);

