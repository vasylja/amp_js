angular.module('app').controller('StatisticsController', [
    '$scope', '$routeParams', 'StatisticsService',
    function ($scope, $routeParams, StatisticsService) {

        $scope.question = StatisticsService.query({qId: $routeParams.id});
        console.log($scope.question)
        //$scope.statistic = StatisticsService.query();
    }
]);
