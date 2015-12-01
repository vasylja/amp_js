angular.module('app').service('CreateQuestionService', [ '$resource',
    function($resource){
        return $resource('questions', {}, {
            query: {method:'POST', isArray:true}
        });
    }
]);

