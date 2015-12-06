angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/users', { templateUrl: '/app/modules/users/list.html', controller: 'UsersListController' })
		.when('/users', { templateUrl: '/app/modules/users/view.html', controller: 'UsersViewController' })
		.when('/questions', {templateUrl: '/app/modules/questions/actions/list/template.html', controller: 'QuestionsListController'})
		.when('/questions/create', {templateUrl: '/app/modules/questions/actions/create/template.html', controller: 'CreateQuestionController'})
        .when('/questions/edit/:id', {templateUrl: '/app/modules/questions/actions/update/template.html', controller: 'UpdateQuestionController'})
		.when('/questions/answer/:id', {templateUrl: '/app/modules/questions/actions/answer/template.html', controller: 'AnswerOnQuestionController'})
		.when('/', {templateUrl: '/app/modules/index/template.html', controller: 'HomeController'})
}]);
