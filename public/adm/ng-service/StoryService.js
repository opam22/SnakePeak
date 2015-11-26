angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('http://ng-artisan.lc/api/get/stories');
        },

        // get all the stories of mine
        getMyStories: function () {
            return $http.get('http://ng-artisan.lc/api/get/stories/mine');
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
        },

        // get story
        getStory: function (id) {
            return $http.get('http://ng-artisan.lc/api/get/edit/story/'+id);
        },

        // publish story (draft)
        publishStory: function (id) {
            return $http.get('http://ng-artisan.lc/api/get/publish/story/'+id);
        },

        // soft delete story 
        trashStory: function (id) {
            return $http.get('http://ng-artisan.lc/api/get/trash/story/'+id);
        },

        //edit story
        editStory: function (editStory) {
        	return $http({
        		method: 'POST',
        		url: 'http://ng-artisan.lc/api/edit/story',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        		data: $.param(editStory)
        	});
        },
    }

}); 