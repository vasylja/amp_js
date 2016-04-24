angular.module('app').config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/signin', {templateUrl: '/app/modules/signin/template.html', controller: 'SignInController'})
		.when('/signup', {templateUrl: '/app/modules/signup/template.html', controller: 'SignUpController'})
		.when('/users', { templateUrl: '/app/modules/users/list.html', controller: 'UsersListController' })
		.when('/users', { templateUrl: '/app/modules/users/view.html', controller: 'UsersViewController' })
		.when('/questions', {templateUrl: '/app/modules/questions/actions/list/template.html', controller: 'QuestionsListController'})
		.when('/questions/create', {templateUrl: '/app/modules/questions/actions/create/template.html', controller: 'CreateQuestionController'})
        .when('/questions/edit/:id', {templateUrl: '/app/modules/questions/actions/update/template.html', controller: 'UpdateQuestionController'})
		.when('/questions/answer/:id', {templateUrl: '/app/modules/questions/actions/answer/template.html', controller: 'AnswerOnQuestionController'})
		.when('/', {templateUrl: '/app/modules/index/template.html', controller: 'HomeController'})
		// .when('/questions/statistics/:id', {templateUrl: '/app/modules/questions/actions/statistics/template.html', controller: 'StatisticsController'})

		.when('/tests', {templateUrl: '/app/modules/tests/actions/list/template.html', controller: 'TestsListController'})
		.when('/tests/create', {templateUrl: '/app/modules/tests/actions/create/template.html', controller: 'CreateTestController'})
		.when('/tests/statistics/:id', {templateUrl: '/app/modules/tests/actions/statistics/template.html', controller: 'StatisticsController'})
	
}]);
