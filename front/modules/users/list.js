angular.module('app').controller('UsersListController', ['$scope', function ($scope) {
	console.log('444');
	$scope.users = [
		{
			id: 'user_id',
			name: 'username',
			email: 'test@mail.cmo'
		},
		{
			id: 'user_id',
			name: 'username',
			email: 'test@mail.cmo'
		},
		{
			id: 'user_id',
			name: 'username',
			email: 'test@mail.cmo'
		},
		{
			id: 'user_id',
			name: 'username',
			email: 'test@mail.cmo'
		}
	];
	$scope.totalCount = $scope.users.length;
}]);
