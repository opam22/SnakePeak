var ngArtisan = angular.module('ngArtisan', [
		'ngRoute',
		'truncate',
		'textAngular',
		'DashboardController',
		'LogoutController',
		'LogoutService',
		'CreateStoryController',
		'StoryService'
	]);


ngArtisan.config(function ($routeProvider) {
	$routeProvider
		.when('/', 
			{
				controller: 'DashboardController',
				templateUrl: 'partials/dashboard.html'
			})
		.when('/create/story', 
			{
				controller: 'CreateStoryController',
				templateUrl: 'partials/create_story.html'
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