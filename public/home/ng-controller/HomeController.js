angular.module('HomeController', [])

.controller('HomeController', function($scope, Story, $http) {

	$scope.storyLoading = true;
               
        /**
         * used to get story data
         * use function from StoryService
         */       
        Story.get()
            .success(function (response) {
        	$scope.stories = response;
                $scope.storyLoading = false;
         });


});
