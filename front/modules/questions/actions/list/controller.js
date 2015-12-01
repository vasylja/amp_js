angular.module('app').controller('CreateQuestionController', [
    '$scope', '$routeParams', 'QuestionsListService',
    function ($scope, $routeParams) {
        $scope.questions = QuestionsListService.query();
    }
]);

