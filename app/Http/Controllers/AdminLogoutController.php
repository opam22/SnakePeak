<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Auth;

class AdminLogoutController extends Controller
{
    public function __construct()
    {
    	$this->middleware('auth');
    }

    public function doLogout()
    {
    	Auth::logout();

    	return redirect('/');
  
    }

}
