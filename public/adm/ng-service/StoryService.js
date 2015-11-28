angular.module('StoryService', [])

.service('Story', function($http) {

    return {
        // get all the stories
        get: function () {
            return $http.get('/api/get/stories');
        },

        // get all the stories of mine
        getMyStories: function () {
            return $http.get('/api/get/stories/mine');
        },

        // get stats
        getStats: function () {
            return $http.get('/api/get/stats');
        },

        //
        /*//save story
        save: function (createStory, file) {
        	return $http({
        		method: 'POST',
        		url: '/api/create/story',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                contentType: 'multipart/form-data',
        		data: $.param(createStory),
                file: file,
                async: true
        	});
        },

        //save story as draft
        saveAsDraft: function (createStory) {
        	return $http({
        		method: 'POST',
        		url: '/api/create/story/draft',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        		data: $.param(createStory),
                async: true
        	});
        },*/

        // get story
        getStory: function (id) {
            return $http.get('/api/get/edit/story/'+id);
        },

        // publish story (draft)
        publishStory: function (id) {
            return $http.get('/api/get/publish/story/'+id);
        },

        // soft delete story 
        trashStory: function (id) {
            return $http.get('/api/get/trash/story/'+id);
        },

        //edit story
        editStory: function (editStory) {
        	return $http({
        		method: 'POST',
        		url: '/api/edit/story',
        		headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        		data: $.param(editStory),
                async: true
        	});
        },

        // get all the trashed of mine
        getMyTrash: function () {
            return $http.get('/api/get/trashes/mine');
        },

        //empty trash
        emptyTrash: function () {
            return $http.get('/api/empty/trash');
        },

        // restore a story from trash
        restore: function (id) {
            return $http.get('/api/get/restore/story/'+id);
        },
    }

}); 