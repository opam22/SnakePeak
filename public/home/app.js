var ngArtisan = angular.module('ngArtisan', [
		'ngRoute',
		'HomeController',
		'AboutController',
		'StoryService' 
	]);


ngArtisan.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'HomeController',
				templateUrl: 'partials/home.html'
			})
		.when('/about', 
			{
				controller: 'AboutController',
				templateUrl: 'partials/about.html'
			})
		.otherwise({ redirectTo: '/'});
});
