var ngArtisan = angular.module('ngArtisan', [
		'ngRoute',
		'truncate',
		'DashboardController',
		'LogoutController',
		'LogoutService'
	]);


ngArtisan.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'DashboardController',
				templateUrl: 'partials/home.html'
			})
		.when('/logout', 
			{
				controller: 'LogoutController'
			})
		.otherwise({ redirectTo: '/'});
});


ngArtisan.run(function ($rootScope){

    $rootScope.authCheck = function() {
        var result = $.ajax({
            url: '/api/auth/check',
            async: false
        });
        return result;
    };

});