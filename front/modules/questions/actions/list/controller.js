angular.module('app').controller('QuestionsListController', [
    '$scope', '$routeParams', 'QuestionsListService',
    function ($scope, $routeParams, QuestionsListService) {
        $scope.path = '#/questions/edit'
        $scope.questions = QuestionsListService.query();
    }
]);
