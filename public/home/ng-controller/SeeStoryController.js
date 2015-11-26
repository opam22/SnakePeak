angular.module('SeeStoryController', [])

.controller('SeeStoryController', function($scope, Story, $routeParams) {


                $scope.storyLoading = true;
                $scope.loved = false;
               
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

                $scope.love = function (story_id) {

                        Story.love(story_id)
                            .success(function (response) {
                                $scope.loved = true;
                            })

                };

});
