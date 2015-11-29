angular.module('StatsController', [])

.controller('StatsController', function($scope, $http, Story, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            $location.path('/home');
        }

        //get user data
        var authData = $scope.getAuthData();
        $rootScope.authUser = authData.responseJSON;
        
        $scope.loadStories = true;

        //get user story
        Story.getStats()
            .success(function (response) {
                $scope.stories = response;
       			$scope.loadStories = false;
            });

});
