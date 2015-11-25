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

    public function getStories()
    {
    	$stories = Story::with('user')->get();

    	return $stories;
    }

}
