angular.module('LogoutService', [])

.service('Logout', function($http) {

    return {
        // get all the stories
        logout: function () {
            return $http.get('http://ng-artisan.lc/ng-adm/logout');
        },
    }

});