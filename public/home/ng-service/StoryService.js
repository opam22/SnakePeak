angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('http://ng-artisan.lc/api/get/stories');
        },

        //used to get story
        see: function (story_id) {
            return $http.get('http://ng-artisan.lc/api/get/story/'+story_id);
        },
    }

}); 