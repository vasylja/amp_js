angular.module('app').controller('CreateQuestionController', [
    '$scope', '$routeParams', CreateQuestionService,
    function ($scope, $routeParams) {
        $scope.save = function(question) {
            //CreateQuestionService.query();
        }
    }
]);

