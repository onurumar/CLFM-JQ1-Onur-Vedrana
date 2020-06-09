// $("form").submit(function(e) {

// 	e.preventDefault();
	
	

// });
$(document).ready(function(){
	//$("form").remove();

	var newDivs = $(`
		<div>New div 1</div>
		<div>New div 2</div>
		<div>New div 3</div>
		<div>New div 4</div>
		<div>New div 5</div>
	`);
	$("article").prepend(newDivs);

	//$(":text[value]").text("Search for");
	$(":text").val("Search for");
	$("div").addClass("box");
	$("a").attr("href", "http://www.codefactory.wien/");



});	