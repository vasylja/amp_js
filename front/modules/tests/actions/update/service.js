/**
 * Created by Andrew on 4/26/2016.
 */
angular.module('app').service('UpdateTestService', [ '$resource',
    function($resource){
        return $resource('tests/:id', null, {
            'update': { method:'PUT' }
        });
    }
]);

