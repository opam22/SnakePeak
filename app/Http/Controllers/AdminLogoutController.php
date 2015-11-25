<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;

class AdminLogoutController extends Controller
{	
	/**
	 * middleware for user authentication
	 * only user who already logged in that can access this controller
	 */
    public function __construct()
    {
    	$this->middleware('auth');
    }

    /**
     * logout request
     * @return [redirect] [description]
     */
    public function doLogout()
    {
    	Auth::logout();

    	return redirect('home/#/');
  
    }

}
