angular.module('StatsController', [])

.controller('StatsController', function($scope, $http, Story, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        //get user data
        var getAuthData = $scope.getAuthData();
        $rootScope.authUser = getAuthData.responseJSON;
        
        $scope.loadStories = true;

        //get user story
        Story.getStats()
            .success(function (response) {
                $scope.stories = response;
       			$scope.loadStories = false;
            });

});
