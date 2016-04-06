angular.module('app', [
	'ngRoute', 'ngResource', 'app.authentication'
]).config(['$httpProvider', function ($httpProvider) {
	// interceptors  README - https://docs.angularjs.org/api/ng/service/$http
	$httpProvider.interceptors.push('authenticationInterceptor');
}]).run();

