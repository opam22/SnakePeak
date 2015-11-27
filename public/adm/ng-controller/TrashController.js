angular.module('TrashController', [])

.controller('TrashController', function($scope, $http, Story, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        //get user data
        var getAuthData = $scope.getAuthData();
        $rootScope.authUser = getAuthData.responseJSON;
        
        $scope.loadStories = true;

        //get story with trash status of user
        Story.getMyTrash()
            .success(function (response) {
                $scope.trashes = response;
       			$scope.loadStories = false;
            });

        //empty trash
        $scope.emptyTrash = function () {

            Story.emptyTrash()
                .success(function (response) {
                     //get story with trash status of user
                     Story.getMyTrash()
                         .success(function (response) {
                             $scope.trashes = response;
                            $scope.loadStories = false;
                         });
                    swal({   title: "Success!",   text: "Your trash has been emptied :)",   type: "success",   confirmButtonText: "Cool" });
                })

        }

        //restore story from trash
        $scope.restoreFromTrash = function (story_id) {

            var story_id = story_id;

            Story.restore(story_id)
                .success(function (response) {
                     //get story with trash status of user
                     Story.getMyTrash()
                         .success(function (response) {
                             $scope.trashes = response;
                            $scope.loadStories = false;
                         });
                    swal({   title: "Success!",   text: "Your story has been restored, the status of the story is now 'draft'.",   type: "success",   confirmButtonText: "Cool" });
                })

        }


});
