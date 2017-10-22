$(document).ready(function() {

	var articles_stack = [".art2", ".art3", ".art4"];
	var current_article = ".art1";

	$(".arrow.left").click(function() {
		$(current_article).css("display", "none");

		let temp = current_article;
		current_article = articles_stack.pop();
		articles_stack.unshift(temp);

		$(current_article).css("display", "block");
	});


	$(".arrow.right").click(function() {
		$(current_article).css("display", "none");

		let temp = current_article;
		current_article = articles_stack.shift();
		articles_stack.push(temp);

		$(current_article).css("display", "block");
	});
});