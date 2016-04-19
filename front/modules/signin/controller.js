angular.module('app').controller('SignInController', [
    '$scope', '$routeParams', '$window', '$http',
    function ($scope, $routeParams, $window, $http) {

		$scope.item = { email: '', password: '' };

		$scope.submit = submit;

		function submit () {
			$http.post('/authenticate', $scope.item)
				.then(function (response) {
					// TODO handle success (add token to localstorage)
					
					// LOGOUT -
					//store.remove('token');
					// LOGOUT -

					store.set('token', response.data.token);
					// $location.path(url);
				})
				.catch(function (error) {
					// TODO handle error
					console.log(error);
				})
		}
    }
]);
