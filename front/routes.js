angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', { templateUrl: '/app/modules/users/list.html', controller: 'UsersListController' })
		//.when('/users', { templateUrl: '/app/modules/users/view.html', controller: 'UsersViewController' })
		.when('/questions', {templateUrl: '/app/modules/questions/actions/list/template.html', controller: 'QuestionsListController'})
		.when('/questions/create', {templateUrl: '/app/modules/questions/create/list/template.html', controller: 'CreateQuestionController'})
		.when('/questions/', {templateUrl: '/app/modules/questions/view.html', controller: 'QuestionsViewController'})
}]);
