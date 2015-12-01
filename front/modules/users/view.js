angular.module('app').controller('UsersViewController', [
	'$scope', '$routeParams',
	function ($scope, $routeParams) {
		$scope.id = $routeParams.id;
		$scope.username = $routeParams.username;
	}
]);
