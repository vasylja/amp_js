angular.module('app').controller('AnswerOnQuestionController', [
    '$scope', '$routeParams', '$window','AnswerOnQuestionService', 'FindQuestionService',
    function ($scope, $routeParams,$window, AnswerOnQuestionService, FindQuestionService) {
        $scope.question = FindQuestionService.get({qId: $routeParams.id});
        $scope.formData = {
            question_id: $routeParams.id,
        };
        $scope.answer = function(isValid){
            $scope.submitted = true;
            if(isValid) {
                AnswerOnQuestionService.save($scope.formData);
            }

        }

    }
]);
