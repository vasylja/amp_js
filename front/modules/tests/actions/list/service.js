angular.module('app').service('TestsListService', [ '$resource',
    function($resource){
        return $resource('tests', {}, {
            query: {method:'GET', isArray:true}
        });
    }
]);

