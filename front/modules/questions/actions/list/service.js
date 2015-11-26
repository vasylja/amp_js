angular.module('app').service('QuestionsListService', [ '$resource',
    function($resource){
        return $resource('questions', {}, {
            query: {method:'GET', isArray:true}
        });
    }
]);

