angular.module('HomeController', [])

.controller('HomeController', function($scope, Story, $http) {

        $scope.tagline = 'HOME';

                /**
                 * used to get story data
                 * use function from StoryService
                 */
        	    Story.get()
        	        .success(function (response) {
        	            $scope.stories = response;
        	            console.log($scope.stories);
        	        });

});
