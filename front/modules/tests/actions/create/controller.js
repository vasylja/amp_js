angular.module('app').controller('CreateTestController', [
    '$scope', '$routeParams','$window' , 'CreateTestService',
    function ($scope, $routeParams, $window, CreateTestService) {
        $scope.test = {
            name: '',
            questions: []
        };

        $scope.addQuestion = function() {
            $scope.test.questions.push({choices: []});
        };
        $scope.removeQuestion = function(question) {
            $scope.test.questions.forEach(function(item, i, arr) {
                if(item===question) {
                    arr.splice(i, 1);
                }
            });
        };

        $scope.addChoice = function(question) {
            $scope.test.questions.forEach(function(item, i, arr) {
                if(item===question) {
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
                        }
                    });
                }
            });
        };

        $scope.save = function(test, isValid) {
            $scope.submitted = true;
            if(isValid) {
                //console.log($scope.test)
                CreateTestService.save(test);
                // $window.location.href = '/#/tests';
            }
        };
    }
]);

