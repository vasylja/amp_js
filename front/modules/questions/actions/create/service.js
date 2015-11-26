angular.module('app').service('CreateQuestionService', [ '$resource',
    function($resource){
        return $resource('questions', {}, {
            query: {method:'POST', body: {"text": "Question 106", "choices": [{"text":"one 106"}, {"text": "two 106"}, {"text": "three 106"} ]}, isArray:true}
        });
    }
]);

