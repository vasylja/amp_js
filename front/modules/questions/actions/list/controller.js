angular.module('app').controller('QuestionsListController', [
    '$scope', '$routeParams', 'QuestionsListService',
    function ($scope, $routeParams, QuestionsListService) {
        $scope.editPath = '#/questions/edit';
        $scope.answerPath= '#/questions/answer';
        $scope.questions = QuestionsListService.query();
    }
]);
