<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Requests\CreateAccountRequest;

use App\Http\Controllers\Controller;
use App\User;

class AdminCreateAccountController extends Controller
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
     * used to handle request to create account page
     * @return [view] [description]
     */
    public function index()
    {
    	return view('admin_create_account.index');
    }

    public function doCreateAccount(CreateAccountRequest $request)
    {
    	$input = $request->all();

    	$input['password'] = bcrypt($input['password']);

    	User::create($input);

    	session()->flash('flash_message', 'Successfully created your account, now you have to login ^^');

    	return redirect()->route('admin-login');


    }
}
