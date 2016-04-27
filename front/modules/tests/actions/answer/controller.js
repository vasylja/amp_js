angular.module('app').controller('AnswerOnTestController', [
    '$scope', '$routeParams', '$window', '$rootScope','AnswerOnQuestionService', 'FindTestService',
    function ($scope, $routeParams,$window, $rootScope, AnswerOnQuestionService, FindTestService) {
        $scope.test = FindTestService.get({tId: $routeParams.id});
        $scope.formData = [];
        $scope.answer = function(isValid){
            $scope.submitted = true;

            if(isValid) {
                // $scope.formData.forEach(function(item,i,arr) {
                //     console.log('sss');
                // });
                 for(var i=0; i< $scope.formData.length; i++) {
                    AnswerOnQuestionService.save($scope.formData[i]);
                 }

                if($rootScope.isLoggedIn) {
                    $window.location.href = '/#/tests';
                } else {
                    $window.location.href = '/#/';
                }
            }

        }
    }
]);
