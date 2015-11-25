angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', { templateUrl: '/app/modules/users/list.html', controller: 'UsersListController' })
		//.when('/users', { templateUrl: '/app/modules/users/view.html', controller: 'UsersViewController' })
		.when('/questions', {templateUrl: '/app/modules/questions/views/view.html', controller: 'QuestionsViewController'})
		.when('/questions/create', {templateUrl: '/app/modules/questions/controllers/create.html', controller: 'QuestionsCreateController'})
		//.when('/questions/', {templateUrl: '/app/modules/questions/view.html', controller: 'QuestionsViewController'})
}]);
