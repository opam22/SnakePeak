angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('http://ng-artisan.lc/api/get/stories');
        },

        //save story
        save: function (createStory) {
        	return $http({
        		method: 'POST',
        		url: 'http://ng-artisan.lc/api/create/story',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        		data: $.param(createStory)
        	});
        },

        //save story as draft
        saveAsDraft: function (createStory) {
        	return $http({
        		method: 'POST',
        		url: 'http://ng-artisan.lc/api/create/story/draft',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        		data: $.param(createStory)
        	});
        }
    }

}); 