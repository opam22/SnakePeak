angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('http://ng-artisan.lc/api/get/stories');
        },
    }

});