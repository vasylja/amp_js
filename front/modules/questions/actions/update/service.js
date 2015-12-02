angular.module('app').service('UpdateQuestionService', [ '$resource',
    function($resource){
        return $resource('questions/:id', null, {
            'update': { method:'PUT' }
        });
    }
]);

