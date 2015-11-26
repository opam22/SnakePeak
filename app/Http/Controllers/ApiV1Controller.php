<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;
use App\Story;

class ApiV1Controller extends Controller
{
    
	/**
	 * used to check wheter a user is logged in or not
	 */
    public function authCheck()
    {
    	if (Auth::user()) {
    		return 1;
    	}
    	else{
    		return 0;
    	}
    }

    /**
     * get all the stories
     * @return [json] [description]
     */
    public function getStories()
    {
    	$stories = Story::with('user')->get();

    	return $stories;
    }

    /**
     * get all the stories of mine
     * @return [json] [description]
     */
    public function getStoriesMine()
    {
    	$stories = Story::with('user')->where('user_id', Auth::user()->id)->where('status', '<>', 'trash')->get();

    	return $stories;
    }

    /**
     * used to create new story with published status
     * @param  Request $request [description]
     * @return [json]           [description]
     */
    public function createStory(Request $request)
    {
    	$input = $request->all();
    	$input['user_id'] = Auth::user()->id;
    	$input['status'] = 'published';

    	Story::create($input);

    	$respons = ['success' => true];

    	return $respons;
   	
    }

    /**
     * used to create new story with draft status
     * @param  Request $request [description]
     * @return [json]           [description]
     */
    public function createStoryAsDraft(Request $request)
    {
    	$input = $request->all();
    	$input['user_id'] = Auth::user()->id;
    	$input['status'] = 'draft';

    	Story::create($input);

    	$respons = ['success' => true];

    	return $respons;

    }

    /**
     * used to get story that user want to edit
     * do auth
     * if user_id is not same with auth::user()->id
     * then fail
     * @param  [type] $id [description]
     * @return [json]     [description]
     */
    public function getEditStory($id)
    {
    	$story = Story::findOrFail($id);

    	if ($story['user_id'] != Auth::user()->id) {
    		
    		return 0;

    	}
    	else{
    		return $story;
    	}
    	
    }

    /**
     * used to edit story
     * @param  Request $request [description]
     * @return [json]           [description]
     */
    public function editStory(Request $request)
    {
    	$story = Story::findOrFail($request->input('id'));

    	$input = $request->all();

    	$story->update($input);

    	$respons = ['success' => true];

    	return $respons;

    }

    /**
     * used to change status story from draft to published
     * @param  [type] $id [description]
     * @return [json]     [description]
     */
    public function publishStory($id)
    {
    	$story = Story::findOrFail($id);

    	$input = ['status' => 'published'];

    	$story->update($input);

    	$respons = ['success' => true];

    	return $respons;

    }

    /**
     * used to change status story to trash
     * it means user move to trahs their story
     * soft delete
     * @param  [type] $id [description]
     * @return [json]     [description]
     */
    public function trashStory($id)
    {
    	$story = Story::findOrFail($id);

    	$input = ['status' => 'trash'];

    	$story->update($input);

    	$respons = ['success' => true];

    	return $respons;

    }

}
