angular.module('app').controller('UpdateQuestionController', [
    '$scope', '$routeParams', '$window','UpdateQuestionService', 'DeleteChoiceService', 'FindQuestionService',
    function ($scope, $routeParams,$window, UpdateQuestionService, DeleteChoiceService, FindQuestionService) {
        $scope.question = FindQuestionService.get({qId: $routeParams.id});
        $scope.removeChoice = function(choice) {
            $scope.question.choices.forEach(function(item, i, arr) {
                if(item===choice) {
                    arr.splice(i, 1);
                    DeleteChoiceService.delete({qId: item.id});

                    $('#choiceRemovedMessage').fadeIn('slow', function () {
                        $(this).delay(1200).fadeIn('slow').fadeOut('slow');
                    });

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
