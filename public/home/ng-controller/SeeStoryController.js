angular.module('SeeStoryController', [])

.controller('SeeStoryController', function($scope, Story, $routeParams) {


                $scope.storyLoading = true;
               
                /**
                 * used to get story data
                 * use function from StoryService
                 */
                var story_id = $routeParams.storyId;

                    Story.see(story_id)
                        .success(function (response) {
                            $scope.story = response;
                            $scope.storyLoading = false;
                            console.log($scope.stories);
                        });

});
