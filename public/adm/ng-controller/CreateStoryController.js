angular.module('CreateStoryController', [])

.controller('CreateStoryController', function($scope, $http, Story, $rootScope, Upload, $window) {

        //auth cek
        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            $window.location.href = '/home';
        }

        //get user data
        var authData = $scope.getAuthData();
        $rootScope.authUser = authData.responseJSON;


        //used to create story with published status
        $scope.submitPublisedStory = function (file) {

        	$scope.createStoryLoading = true;
            
            if (file) {
                file.upload = Upload.upload({
                     url: '/api/create/story',
                     data: {'photo': file, 'title': $scope.createStory.title, 'content': $scope.createStory.content}
                });

                file.upload.then(function (response) {
                  $scope.createStoryLoading = false;
                  $scope.createStory = {};
                  swal({   title: "Success!",   text: "Your story has been published :)",   type: "success",   confirmButtonText: "Cool" });
                });

            }   
        };

        //used to create story with draft status
        $scope.submitDraftStory = function (file) {

        	   $scope.createStoryLoading = true;
                
                if (file) {
                    file.upload = Upload.upload({
                         url: '/api/create/story/draft',
                         data: {'photo': file, 'title': $scope.createStory.title, 'content': $scope.createStory.content}
                    });

                    file.upload.then(function (response) {
                      $scope.createStoryLoading = false;
                      $scope.createStory = {};
                      swal({   title: "Success!",   text: "Your story has been published :)",   type: "success",   confirmButtonText: "Cool" });
                    });

                }
        };

});
