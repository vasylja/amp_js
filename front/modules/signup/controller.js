angular.module('app').controller('SignUpController', [
    '$scope', '$routeParams','$window' ,'$http',
    function ($scope, $routeParams, $window, $http) {
        $scope.item = { email: '', password: '', name: '' };

        $scope.signup = signup;

        function signup () {
            $http.post('/users', $scope.item);
            
            $window.location.href = '/#/signin';

                // .then(function (response) {
                //     console.log('yes');
                //     $('#registredMessage').fadeIn('slow', function () {
                //         $(this).delay(1200).fadeIn('slow').fadeOut('slow');
                //     });
                //
                //     $window.location.href = '/#/signin';
                // })
                // .catch(function (error) {
                //     // TODO handle error
                //     console.log(error);
                // })
        }
    }
]);
