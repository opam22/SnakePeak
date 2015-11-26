angular.module('CreateStoryController', [])

.controller('CreateStoryController', function($scope, $http, Story, $location) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        $scope.tagline = 'Create Story';

        //used to create story with published status
        $scope.submitPublisedStory = function () {

        	console.log($scope.createStory);
        	$scope.createStoryLoading = true;

        	Story.save($scope.createStory)
        		.success(function (response) {
        			console.log('berhasil');
        			$scope.createStoryLoading = false;
        			$scope.createStory = {};
        			swal({   title: "Success!",   text: "Your story has been published :)",   type: "success",   confirmButtonText: "Cool" });
        		
        		})
        		.error(function (responseText) {
        			console.log(responseText);
        			swal({   title: "Error!",   text: responseText,   type: "error",   confirmButtonText: "OK" });
        		});

        };

        //used to create story with draft status
        $scope.submitDraftStory = function () {

        	console.log($scope.createStory);
        	$scope.createStoryLoading = true;

        	Story.saveAsDraft($scope.createStory)
        		.success(function (response) {
        			console.log('berhasil');
        			$scope.createStoryLoading = false;
        			$scope.createStory = {};
        			swal({   title: "Success!",   text: "Your story has been save as draft :)",   type: "success",   confirmButtonText: "Cool" });
        		
        		})
        		.error(function (responseText) {
        			console.log(responseText);
        			swal({   title: "Error!",   text: responseText,   type: "error",   confirmButtonText: "OK" });
        		});

        };

});
