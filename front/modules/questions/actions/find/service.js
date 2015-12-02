angular.module('app').service('FindQuestionService', [ '$resource',
    function($resource){
        return $resource('questions/:qId', {qId:'@id'});
    }
]);

