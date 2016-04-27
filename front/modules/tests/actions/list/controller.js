angular.module('app').controller('TestsListController', [
    '$scope', '$routeParams', 'TestsListService',
    function ($scope, $routeParams, TestsListService) {
        $scope.editPath = '#/tests/update';
        $scope.answerPath= '#/tests/answer';
        $scope.pathStats = '#/tests/statistics'
        $scope.tests = TestsListService.query();
    }
]);
