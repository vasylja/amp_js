angular.module('app').controller('UpdateTestController', [
    '$scope', '$routeParams','$window' , 'UpdateTestService','DeleteChoicesByQuestionIdService',
    'DeleteChoiceService','DeleteQuestionService', 'FindTestService',
    function ($scope, $routeParams, $window, UpdateTestService,DeleteChoicesByQuestionIdService,
    DeleteChoiceService,DeleteQuestionService,FindTestService) {

        $scope.test = FindTestService.get({tId: $routeParams.id});
        console.log($scope.test)
        $scope.addQuestion = function() {
            if($scope.test.questions == null) {
                $scope.test.questions = [];
            }
            $scope.test.questions.push({choices: []});
        };

        $scope.removeQuestion = function(question) {
            $scope.test.questions.forEach(function(item, i, arr) {
                if(item===question) {
                    arr.splice(i, 1);
                    DeleteChoicesByQuestionIdService.delete({qId: question.id});
                    DeleteQuestionService.delete({qId: question.id});
                }
            });
        };

        $scope.addChoice = function(question) {
            $scope.test.questions.forEach(function(item, i, arr) {
                if(item===question) {
                    if(item.choices == null) {
                        item.choices = [];
                    }
                    item.choices.push({});
                }
            });
        };

        $scope.removeChoice = function(question, choice) {
            $scope.test.questions.forEach(function(item, i, arr) {
                if(item===question) {
                    item.choices.forEach(function(ch, j, array) {
                        if(ch===choice) {
                            array.splice(j,1);
                            DeleteChoiceService.delete({qId: choice.id});
                        }
                    });
                }
            });
        };

        $scope.save = function(test, isValid) {
            $scope.submitted = true;
            if(isValid) {
                UpdateTestService.update({id: $routeParams.id}, test);
                $window.location.href = '/#/tests';
            }
        };
    }
]);

