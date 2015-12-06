angular.module('app').controller('QuestionsListController', [
    '$scope', '$routeParams', 'QuestionsListService',
    function ($scope, $routeParams, QuestionsListService) {
        $scope.editPath = '#/questions/edit';
        $scope.answerPath= '#/questions/answer';
        $scope.path = '#/questions/edit'
        $scope.pathStats = '#/questions/statistics'
        $scope.questions = QuestionsListService.query();
    }
]);
