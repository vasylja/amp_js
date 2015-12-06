angular.module('app').service('AnswerOnQuestionService', [ '$resource',
    function($resource){
        return $resource('answers', {}, {
            query: {method:'POST', isArray:true}
        });
    }
]);

