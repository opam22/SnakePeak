var ngArtisanAdm = angular.module('ngArtisanAdm', [
		'ngRoute',
		'truncate',
		'textAngular',
		'DashboardController',
		'CreateStoryController',
		'StoryService',
		'YourStoriesController',
		'EditStoryController',
		'TrashController',
		'AccountController',
		'StatsController'
	]);


ngArtisanAdm.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'DashboardController',
				templateUrl: 'partials/dashboard.html'
			})
		.when('/account', 
			{
				controller: 'AccountController',
				templateUrl: 'partials/account.html'
			})
		.when('/stats', 
			{
				controller: 'StatsController',
				templateUrl: 'partials/stats.html'
			})
		.when('/create/story', 
			{
				controller: 'CreateStoryController',
				templateUrl: 'partials/create_story.html'
			})
		.when('/your-stories', 
			{
				controller: 'YourStoriesController',
				templateUrl: 'partials/your_stories.html'
			})
		.when('/edit/story/:storyId', 
			{
				controller: 'EditStoryController',
				templateUrl: 'partials/edit_story.html'
			})
		.when('/trash', 
			{
				controller: 'TrashController',
				templateUrl: 'partials/trash.html'
			})
		.when('/logout', 
			{
				controller: 'LogoutController'
			})
		.otherwise({ redirectTo: '/'});
});


ngArtisanAdm.run(function ($rootScope){

	//auth check
    $rootScope.authCheck = function() {
        var result = $.ajax({
            url: '/api/auth/check',
            async: false
        });
        return result;
    };

    //get authentication
    $rootScope.getAuthData = function () {
    	var data = $.ajax({
    		url: '/api/auth/data',
    		async:false
    	});
    	return data;
    };


    /*USED TO MATERIAL DESIGN LITE*/
    var mdlUpgradeDom = false;
        setInterval(function() {
          if (mdlUpgradeDom) {
            componentHandler.upgradeDom();
            mdlUpgradeDom = false;
          }
        }, 200);

        var observer = new MutationObserver(function () {
          mdlUpgradeDom = true;
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        /* support <= IE 10
        angular.element(document).bind('DOMNodeInserted', function(e) {
            mdlUpgradeDom = true;
        });
        */
       
});