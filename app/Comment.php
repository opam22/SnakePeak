<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    
    protected $fillable = [
    	'story_id', 
    	'name', 
    	'comment'
    ];

    public function story()
    {
    	return $this->belongsTo('App\Story');
    }

}
