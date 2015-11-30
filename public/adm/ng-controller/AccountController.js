angular.module('AccountController', [])

.controller('AccountController', function($scope, $http, $rootScope, $window) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            $window.location.href = '/home';
        }

        //get user data
        var authData = $scope.getAuthData();
        $rootScope.authUser = authData.responseJSON;

});
