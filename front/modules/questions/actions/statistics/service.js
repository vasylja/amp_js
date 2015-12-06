angular.module('app').service('StatisticsService', [
    '$resource',
    function($resource){
        return $resource('/questions/statistics/:qId', {qId:'@id'}, {
            query: {method:'GET', isArray:true}
        });
        //return $resource('/questions/statistics/:qId', {qId:'@id'});
    }
]);

