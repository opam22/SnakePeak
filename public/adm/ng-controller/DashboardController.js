angular.module('DashboardController', [])

.controller('DashboardController', function($scope, $http) {

        var cek = $scope.authCheck();
        if(cek.responseText != 1) {
            window.location.href = '/home';
        }

        $scope.tagline = 'ADMIN HOME DASHBOARD';

});
