<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    
	protected $fillable = [
		'name', 
		'email', 
		'password', 
		'photo'
	];

	public function user()
	{
		return $this->belongsTo('App\User');
	}

	public function comments()
	{
		return $this->hasMany('App\Comment');
	}

}
