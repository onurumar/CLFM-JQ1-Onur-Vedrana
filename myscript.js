
		$(document).ready(function(){
			$("p#intro").css("background-color","yellow");
			$(".note").css("background-color","blue");
			$("div.note").css("background-color","green");
			$("article p").css("background-color","orange");
			$("p:last").css("background-color","red");
			$("p:first").css("background-color","red");
			$("p [href]").css("background-color","green");
			$("ul li:nth-child(2)").css("background-color","orange");
			$("p:nth-child(2),p:nth-child(3)").css("background-color","pink");


		})

	





/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
// $("*").css("background-color", "yellow");

// all p elements


// the p element with an ID of "intro"


// all elements with a class of "note"


// all DIV elements with a class of note


// all p elements in the article element


// the last element in any section which is a p tag


// the first paragraph on the page


// all p elements which have a link


// the second li within nested ul element


// every second and third p element
