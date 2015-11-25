@extends('master_admin_login')

@section('content')

<div class="container">
	<div class="col-md-4">
		
	</div>

	<div class="col-md-4">
	<center>

		<h1>Login</h1>

		@if($errors->any())
		  
		  <ul class="alert alert-danger">
		    
		    @foreach($errors->all() as $error)

		      <li style="margin-left:5px;">{{ $error }}</li>

		    @endforeach

		  </ul>

		@endif

		@if(Session::has('flash_message'))
		    
		    <br><br><br>
		    <div class="alert alert-danger">
		        
		        {{ session('flash_message') }}

		    </div>

		@endif

		{!! Form::open(['route' => 'admin-login-do']) !!}

		<div class="form-group"> 
			{!! Form::label('email', 'Email..') !!}
			{!! Form::text('email', null, ['class' => 'form-control']) !!}
		</div>

		<div class="form-group"> 
			{!! Form::label('password', 'Password..') !!}
			{!! Form::password('password', ['class' => 'form-control']) !!}
		</div>

		<div class="form-group"> 
			{!! Form::submit('Log in', ['class' => 'btn btn-danger form-control']) !!}
		</div>

		{!! Form::close() !!}

	</center>
	</div>

	<div class="col-md-4">
		
	</div>
	
</div>
	
@stop