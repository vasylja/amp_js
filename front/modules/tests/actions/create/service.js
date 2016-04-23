angular.module('app').service('CreateTestService', [ '$resource',
    function($resource){
        return $resource('tests', {}, {
            query: {method:'POST', isArray:true}
        });
    }
]);


