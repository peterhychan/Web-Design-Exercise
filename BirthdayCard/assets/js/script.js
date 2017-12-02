$(document).ready(function() {



$("#load-container").delay(6000).fadeOut();
$("#contents").delay(6000).fadeIn(1000);


$("#load").click(function() {
	$("#astro-snoopy").addClass("loading");
	$("#load").hide();
	$("#snoopy-head").delay(4500).fadeIn();
	$("#launch").delay(5500).show(0);
});

$("#launch").click(function() {
	$("#launch").hide();
	$("#rocket-container").addClass("blast");
	$("#contents").delay(2000).fadeOut();
	$("#snoopy-text").delay(2500).fadeIn();
	});


$('#snoopy-text').typeIt({
 speed: 50,
 loop: true
})
.tiType("We wish you a Merry Christmas ...")
.tiPause(3500)
.tiDelete(50)
.tiPause(1000)
.tiType("and a Happy New Year!")
.tiPause(2400)
.tiSettings({speed: 80})
.tiDelete(50)
.tiPause(1000)
.tiType("Let me sing you a song ...")
.tiPause(2900)
.tiSettings({speed: 95})
.tiDelete(50)
.tiSettings({speed: 10})
.tiType(". . . ")
.tiPause(1500)
.tiSettings({speed: 50})
.tiDelete(50)
.tiType("Just kidding !")
.tiPause(3000)
.tiDelete();


});

