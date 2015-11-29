angular.module('EditStoryController', [])

.controller('EditStoryController', function($scope, $http, Story, $routeParams, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            $location.path('/home');
        }

        //get user data
        var authData = $scope.getAuthData();
        $rootScope.authUser = authData.responseJSON;

        $scope.editStoryLoading = true;
        $scope.saveEditButton = false;


        var story_id = $routeParams.storyId;

        //used to get story user want to edit
        Story.getStory(story_id)
            .success(function (response) {
                
                $scope.editStoryLoading = false;
                if (response == 0) {
                    swal({   title: "Error!",   text: "Hey this story is not yours, you dont have permission to access :)",   type: "error",   confirmButtonText: "OK" });
                }
                else{
                    $scope.editStory = response;
                    $scope.saveEditButton = true;  
                }

                
            });


        //used to process edit story
        $scope.submitEditStory = function () {

            Story.editStory($scope.editStory)
                .success(function (response) {
                    $scope.createStoryLoading = false;
                    swal({   title: "Success!",   text: "Your story has been edited :)",   type: "success",   confirmButtonText: "Cool" });
                
                })
                .error(function (responseText) {
                    swal({   title: "Error!",   text: responseText,   type: "error",   confirmButtonText: "OK" });
                });

        };


});
