var ngArtisan = angular.module('ngArtisan', [
		'ngRoute',
		'ngSanitize',
		'truncate',
		'HomeController',
		'AboutController',
		'StoryService',
		'SeeStoryController'
	]);


ngArtisan.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'HomeController',
				templateUrl: 'partials/home.html'
			})
		.when('/see/story/:storyId', 
			{
				controller: 'SeeStoryController',
				templateUrl: 'partials/see_story.html'
			})
		.when('/about', 
			{
				controller: 'AboutController',
				templateUrl: 'partials/about.html'
			})
		.otherwise({ redirectTo: '/'});
});
