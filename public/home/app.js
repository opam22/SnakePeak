var ngArtisan = angular.module('ngArtisan', [
		'ngRoute',
		'ngSanitize',
		'truncate',
		'HomeController',
		'AboutController',
		'StoryService',
		'SeeStoryController',
		'CommentService'
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


ngArtisan.run(function (){

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
