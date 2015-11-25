<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\AdminLoginRequest;
use App\Http\Controllers\Controller;
use Auth;
use App\User;

class AdminLoginController extends Controller
{	

	/**
	 * middleware for user authentication
	 * only user who haven't logged in that can access this controller
	 */
	public function __construct()
	{
		return $this->middleware('guest');
	}
    
    /**
     * used to handle request to login page
     * @return [view] [description]
     */
    public function index()
    {
    	return view('admin_login.index');
    }


    /**
     * login request
     * if email n password match, then redirect to admin page
     * @param  AdminLoginRequest $request [description]
     * @return [redirect]                     [description]
     */
    public function doLogin(AdminLoginRequest $request)
    {
    	$credentials = [
    	    'email' => $request->input('email'),
    	    'password' => $request->input('password')
    	];

    	
    	if(Auth::attempt($credentials)){
    	    
    	      return redirect('adm/#/');

    	}
    	else{

    	    session()->flash('flash_message', 'Your Username and password do not match.');

    	    return redirect()->back();

    	}

    }

}
