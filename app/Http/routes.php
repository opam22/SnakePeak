<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return redirect('home/#/');
});

Route::get('ng-adm', [
		'as' => 'admin-login', 'uses' => 'AdminLoginController@index'
	]);
Route::post('ng-adm', [
		'as' => 'admin-login-do', 'uses' => 'AdminLoginController@doLogin'
	]);

Route::get('ng-adm/logout', [
		'as' => 'admin-logout', 'uses' => 'AdminLogoutController@doLogout'
	]);


Route::group(array('prefix' => 'api'), function() {

	Route::get('auth/check', [
			'as' => 'api-auth-check', 'uses' => 'ApiV1Controller@authCheck'
		]);

	Route::get('get/stories', [
			'as' => 'api-get-stories', 'uses' => 'ApiV1Controller@getStories'
		]);

});
