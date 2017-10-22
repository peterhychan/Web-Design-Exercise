$(document).ready(function(){

	/*
	Brutual Method  
	*/

	$("#s1").click(function(){
	    $("#body").fadeOut();
	    $("#o2").fadeOut();
	    $("#o3").fadeOut();
	    $("#o4").fadeOut();
	    $("#o5").fadeOut();
		$("#o1").fadeIn();
	}),

	$("#s2").click(function(){
	    $("#body").fadeOut();
	    $("#o1").fadeOut();
	    $("#o3").fadeOut();
	    $("#o4").fadeOut();
	    $("#o5").fadeOut();
		$("#o2").fadeIn();
	}),

	$("#s3").click(function(){
	    $("#body").fadeOut();
	    $("#o1").fadeOut();
	    $("#o2").fadeOut();
	    $("#o4").fadeOut();
	    $("#o5").fadeOut();
		$("#o3").fadeIn();
	}),

	$("#s4").click(function(){
	    $("#body").fadeOut();
	    $("#o1").fadeOut();
	    $("#o2").fadeOut();
	    $("#o3").fadeOut();
	    $("#o5").fadeOut();
		$("#o4").fadeIn();
	}),

	$("#s5").click(function(){
	    $("#body").fadeOut();
	    $("#o1").fadeOut();
	    $("#o2").fadeOut();
	    $("#o3").fadeOut();
	    $("#o4").fadeOut();
		$("#o5").fadeIn();
	}),

	$("#strip-button").click(function(){
	    $("#o1").fadeOut();
	    $("#o2").fadeOut();
	    $("#o3").fadeOut();
	    $("#o4").fadeOut();
	    $("#o5").fadeOut();		
	    $("#body").fadeIn();
	})


})

