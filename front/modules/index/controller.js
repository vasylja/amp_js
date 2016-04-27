angular.module('app').controller('HomeController', [
    '$scope', '$routeParams','$window' ,
    function ($scope, $routeParams, $window) {
        $scope.go = function(id, isValid) {
            $scope.submitted = true;
            if(isValid) {
               $window.location.href = '/#/tests/answer/' + id;
            }
        };

        $scope.$on('$viewContentLoaded', function() {
            $('#in').focus();
        });
    }
]);
