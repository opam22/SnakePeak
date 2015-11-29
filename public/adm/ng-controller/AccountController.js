angular.module('AccountController', [])

.controller('AccountController', function($scope, $http, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            $location.path('/home');
        }

        //get user data
        var authData = $scope.getAuthData();
        $rootScope.authUser = authData.responseJSON;

});
