angular.module('app', [
	'ngRoute', 'ngResource', 'app.authentication'
]).config(['$httpProvider', function ($httpProvider) {
	// interceptors  README - https://docs.angularjs.org/api/ng/service/$http
	$httpProvider.interceptors.push('authenticationInterceptor');
}]).run(['$rootScope', '$window', function ($rootScope, $window) {

	$rootScope.isLoggedIn = false;
	$rootScope.logout = logout;
	$rootScope.$watch(
		function () {
			return store.get('token');
		},
		function () {
			$rootScope.isLoggedIn = !!store.get('token');
		}
	);

	function logout () {
		store.remove('token');
		$window.location.href = '/#/';
	}

}]);

