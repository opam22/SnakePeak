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
Route::get('ng-adm/create/account', [
		'as' => 'admin-create-account', 'uses' => 'AdminCreateAccountController@index'
	]);
Route::post('ng-adm/create/account', [
		'as' => 'admin-create-account-do', 'uses' => 'AdminCreateAccountController@doCreateAccount'
	]);


Route::group(array('prefix' => 'api'), function() {

	Route::get('auth/check', [
			'as' => 'api-auth-check', 'uses' => 'ApiV1Controller@authCheck'
		]);
	Route::get('auth/data', [
			'as' => 'api-auth-data', 'uses' => 'ApiV1Controller@authData'
		]);

	Route::get('get/stories/mine', [
			'as' => 'api-get-stories-mine', 'uses' => 'ApiV1Controller@getStoriesMine'
		]);
	Route::get('get/story/{id}', [
			'as' => 'api-get-story', 'uses' => 'ApiV1Controller@getStory'
		]);
	Route::get('love/story/{id}', [
			'as' => 'api-love-story', 'uses' => 'ApiV1Controller@loveStory'
		]);
	Route::get('get/stories', [
			'as' => 'api-get-stories', 'uses' => 'ApiV1Controller@getStories'
		]);
	Route::post('create/story', [
			'as' => 'api-create-story', 'uses' => 'ApiV1Controller@createStory'
		]);
	Route::post('create/story/draft', [
			'as' => 'api-create-story', 'uses' => 'ApiV1Controller@createStoryAsDraft'
		]);
	Route::get('get/edit/story/{id}', [
			'as' => 'api-get-edit-story', 'uses' => 'ApiV1Controller@getEditStory'
		]);
	Route::get('get/publish/story/{id}', [
			'as' => 'api-get-publish-story', 'uses' => 'ApiV1Controller@publishStory'
		]);
	Route::get('get/trash/story/{id}', [
			'as' => 'api-get-trash-story', 'uses' => 'ApiV1Controller@trashStory'
		]);
	Route::post('edit/story', [
			'as' => 'api-edit-story', 'uses' => 'ApiV1Controller@editStory'
		]);
	Route::get('get/comments/{story_id}', [
			'as' => 'api-get-comments', 'uses' => 'ApiV1Controller@getComments'
		]);
	Route::post('save/comment', [
			'as' => 'api-save-comment', 'uses' => 'ApiV1Controller@saveComment'
		]);
	Route::get('get/trashes/mine', [
			'as' => 'api-get-trashes-mine', 'uses' => 'ApiV1Controller@getTrashesMine'
		]);
	Route::get('empty/trash', [
			'as' => 'api-empty-trashes-mine', 'uses' => 'ApiV1Controller@emptyTrash'
		]);
	Route::get('get/restore/story/{id}', [
			'as' => 'api-restore-story', 'uses' => 'ApiV1Controller@restoreStory'
		]);
	Route::get('get/stats', [
			'as' => 'api-get-stats', 'uses' => 'ApiV1Controller@getStats'
		]);

});
