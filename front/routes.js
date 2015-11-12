angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', { templateUrl: '/app/modules/users/list.html', controller: 'UsersListController' })
		.when('/users', { templateUrl: '/app/modules/users/view.html', controller: 'UsersViewController' })
}]);
