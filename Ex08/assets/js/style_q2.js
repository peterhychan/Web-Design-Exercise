$(document).ready(function()  {

	/*
	Part 1
		HINT - What are the only two states a button can be in?
		HINT - Hmmm button_active looks pretty helpful...
	
	Part 2 
		HINT - What information did the outer for look give us? 
		HINT - Hmmm button_name looks pretty helpful...
		HINT - Display should be set to inline-block
	*/

	$(".q2-nav-item").click(function() {


		let button_name = $(this).text();
		let button_active = $(this).hasClass("q2-active");

		let condition = /* YOUR CODE HERE - Part 1*/

		if (condition) {
			$(this).addClass("q2-active");
			$(this).removeClass("q2-inactive");

			/* YOUR CODE HERE - Part 2 */

		} else {
			$(this).addClass("q2-inactive");
			$(this).removeClass("q2-active");

			/* YOUR CODE HERE - Part 2 */
		}
	})



})