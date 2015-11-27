angular.module('CommentService', [])

.service('Comment', function($http) {

    return {
        // get all the comments
        get: function (story_id) {
            return $http.get('/api/get/comments/'+story_id);
        },

        //save comment
        save: function (dataComment) {
            return $http({
                method: 'POST',
                url: '/api/save/comment',
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(dataComment)
            });
        }
    }

}); 