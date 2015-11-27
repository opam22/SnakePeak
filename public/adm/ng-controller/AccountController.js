angular.module('AccountController', [])

.controller('AccountController', function($scope, $http, $rootScope) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        //get user data
        var getAuthData = $scope.getAuthData();
        $rootScope.authUser = getAuthData.responseJSON;

});
