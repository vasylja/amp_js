angular.module('app').controller('TestsListController', [
    '$scope', '$routeParams', 'TestsListService',
    function ($scope, $routeParams, TestsListService) {
        $scope.editPath = '#/tests/edit';
        $scope.answerPath= '#/tests/answer';
        $scope.pathStats = '#/tests/statistics'
        $scope.tests = TestsListService.query();
    }
]);
