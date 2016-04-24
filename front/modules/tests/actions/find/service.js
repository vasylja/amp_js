angular.module('app').service('FindTestService', [ '$resource',
    function($resource){
        return $resource('tests/:tId', {tId:'@id'});
    }
]);

