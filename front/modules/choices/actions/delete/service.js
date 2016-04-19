angular.module('app').service('DeleteChoiceService', [ '$resource',
    function($resource){
        return $resource('choices/:qId', {qId:'@id'}, {
            'delete': { method:'DELETE', isArray: false }
        });
    }
]);

