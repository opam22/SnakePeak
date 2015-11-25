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
    
    public function index()
    {
    	return view('admin_login.index');
    }


    public function doLogin(AdminLoginRequest $request)
    {
    	$credentials = [
    	    'email' => $request->input('email'),
    	    'password' => $request->input('password')
    	];

    	
    	if(Auth::attempt($credentials)){
    	    
    	      return redirect('/');

    	}
    	else{

    	    session()->flash('flash_message', 'Your Username and password do not match.');

    	    return redirect()->back();

    	}

    }

}
