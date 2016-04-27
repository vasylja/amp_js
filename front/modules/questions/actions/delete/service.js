/**
 * Created by Andrew on 4/26/2016.
 */
angular.module('app').service('DeleteQuestionService', [ '$resource',
    function($resource){
        return $resource('questions/:qId', {qId:'@id'}, {
            'delete': { method:'DELETE', isArray: false }
        });
    }
]);
