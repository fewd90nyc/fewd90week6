/*$(document).ready(function(){
	$("nav a").click(function(){
		$(this).currentTarget();
});
});*/

/*$("nav a").click(function(){
	$("nav.current").removeClass("current");
	$(this).addClass("current");
});

$("#submit").click(function(){
    var ipsumType = $("nav a.current").attr("data-ipsum");
    $("#" + ipsumType).slideDown();
    var numParagraphs = $("#paragraphs").val();
    console.log(numParagraphs);

  });

$("#paragraphs").focus(function(){
	$(".ipsum").slideUp();
});*/

/*.current()
.click() -
.focus() -
.removeClass()
.addClass()
.data()
.slice()
.find()
.hide()
.slideDown()
.slideUp()*/

$("#submit").click(function() {
	$("button").attr(".ipsum");
	$(".ipsum").slideDown();
	$("p").show($(this).data());
	$("p").hide();
	$(this).slice();
});
$("nav a").click(function() {
	$(".ipsum").slideUp();
	var div = $(this).attr("ipsum");
	$(".ipsum").hide();
	$(".ipsum").attr("ipsum", div);
});
//this changes the outline color of the text input box 
//and around the "generate" box

$("input").focus(function(){
	$("input").css("outline-color", "white");
});
$("button").focus(function(){
	$("button").css("outline-color", "white");
});

//$("nav a").currentTarget();
//$(".form").removeClass.slideUp(500);

/*$("#submit").click(function(){
    var ipsumType = $('nav a.current').attr('data-ipsum');
    $('#' + ipsumType).slideDown();
    var numParagraphs = $('#paragraphs').val();
    console.log(numParagraphs);
});



/*$(".thumb").click(function(){
	var imgSrc = $(this).attr("src");
	$("#bigimage").hide();
	$("#bigimage").attr("src", imgSrc);
	$("#bigimage").fadeIn(500);
});	*/


/*$(document).ready(function() {
$("a").click(function() {
	$("p").css("color", $(this).data("color"));
	$("a").css("background-color", $(this).data("color"));
	$("header").css("background-color", $(this).hdata("color"));
	});
});*/

