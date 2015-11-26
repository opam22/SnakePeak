angular.module('YourStoriesController', [])

.controller('YourStoriesController', function($scope, $http, Story) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        $scope.tagline = 'Your Stories';
        $scope.loadStories = true;

        //get user story
        Story.getMyStories()
            .success(function (response) {
                $scope.stories = response;
       			$scope.loadStories = false;
                console.log($scope.stories);
            });


         //used to change story status from draft to published
         $scope.publishStory = function (id) {

         	$scope.loadStories = true;

         	Story.publishStory(id)
         		.success(function (response) {

         			swal({   title: "Success!",   text: "Your story has been published :)",   type: "success",   confirmButtonText: "Cool" });

         			 Story.getMyStories()
         			     .success(function (response) {
         			         $scope.stories = response;
         					 $scope.loadStories = false;
         			         console.log($scope.stories);
         			     });

         		})

         };

         //used to change story status to trash (soft delete)
         $scope.trashStory = function (id) {

         	$scope.loadStories = true;

         	Story.trashStory(id)
         		.success(function (response) {

         			swal({   title: "Success!",   text: "Your story has been moved to trash :)",   type: "success",   confirmButtonText: "Cool" });

         			 Story.getMyStories()
         			     .success(function (response) {
         			         $scope.stories = response;
         					 $scope.loadStories = false;
         			     });

         		})

         };


});
