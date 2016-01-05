(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module('AboutController', [])

.controller('AboutController', function($scope) {

        $scope.tagline = 'ABOUT ME';

});

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
angular.module('SeeStoryController', [])

.controller('SeeStoryController', function($scope, Story, Comment, $routeParams) {


        $scope.storyLoading = true;
        $scope.loved = false;
        $scope.commentLoading = true;

        /**
        * used to get story data
        * use function from StoryService
        */
        var story_id = $routeParams.storyId;

        Story.see(story_id)
            .success(function (response) {
                $scope.story = response;
                $scope.storyLoading = false;
            });

        Comment.get(story_id)
            .success(function (response) {
                $scope.comments = response;
                $scope.commentLoading = false;
            });

        $scope.love = function (story_id) {

            Story.love(story_id)
                .success(function (response) {
                    $scope.loved = true;
                })

        };


        $scope.postComment = function (story_id) {

            var storyId = story_id;
            $scope.commentLoading = true;
            $scope.dataComment.story_id =  storyId;
            Comment.save($scope.dataComment)
                .success(function (response) {
                    $scope.dataComment = {};

                    Comment.get(story_id)
                        .success(function (response) {
                            $scope.comments = response;
                            $scope.commentLoading = false;
                        });

                })

        };

});

},{}]},{},[1,2,3]);
