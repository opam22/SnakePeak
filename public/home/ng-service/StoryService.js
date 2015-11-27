angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('/api/get/stories');
        },

        //used to get story
        see: function (story_id) {
            return $http.get('/api/get/story/'+story_id);
        },

        //used to love story
        love: function (story_id) {
            return $http.get('/api/love/story/'+story_id);
        },
    }

}); 