$(document).ready(function(){

/*     $(function(){
        $('a').each(function(){
                    var x=this.href;
                    this.href="http://www.codefactory.wien/"+this.href;
              });
     }); */


    $("a").attr("href", "http://www.codefactory.wien/");
    $("code").css("color", "red");
    $("ol > li").css("background-color", "#2a7b90");
    $("textarea").val("Express your opinion");
    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");
    $("blockquote").css({
        "background-color": "orange", 
        "font-style": "italic"
    });
    $("#logo").css("color", "black");
    $(".gray").css("color", "white");

    $(".date").remove();

    var newSidebarMenu = $(`
		<li><a href="http://all-free-download.com/free-website-templates/"><span>New Templates</span></li>
		<li><a href="http://all-free-download.com/free-website-templates/"><span>Order Template</span></li>
		<li><a href="http://all-free-download.com/free-website-templates/"><span>Contact Us</span></li>
	`);
	$("ul.sidemenu:first").append(newSidebarMenu);

    $("h1 ~ p:first").replaceWith("I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");

});	