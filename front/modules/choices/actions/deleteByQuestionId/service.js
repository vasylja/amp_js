/**
 * Created by Andrew on 4/26/2016.
 */
angular.module('app').service('DeleteChoicesByQuestionIdService', [ '$resource',
    function($resource){
        return $resource('/choices/questions/:qId', {qId:'@id'}, {
            'delete': { method:'DELETE', isArray: false }
        });
    }
]);

