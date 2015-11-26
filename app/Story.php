<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    
	protected $fillable = [
		'title', 
		'user_id',
		'content',
		'photo',
		'view',
		'love',
		'status'
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
