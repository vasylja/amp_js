angular.module('app').controller('StatisticsController', [
    '$scope', '$routeParams', 'StatisticsService',
    function ($scope, $routeParams, StatisticsService) {

        $scope.statistic = StatisticsService.query({qId: $routeParams.id});
        console.log($scope.statistic)
        //$scope.statistic = StatisticsService.query();
    }
]);
