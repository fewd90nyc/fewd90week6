$("nav a").click(function(){
	$("nav a.current").removeClass("current");
	$(this).addClass("current");
});

// click submit
// remove class current to ipsum

$("#submit").click(function(){ 
	var ipsumType = $("nav a.current").attr("data-ipsum");
	$("#" + ipsumType).slideDown();

var numParagraphs = $("#paragraphs").val();
console.log(numParagraphs);
});

$("#paragraphs").focus(function(){ 
 $(".ipsum").slideUp();
});

// $("#paragraphs").slice(function(){
// $("#paragraphs").val()
// });











































// $("nav a.current").removeClass("current");
// $(this).addClass("current");
// var paragraph = $(this).index();
// $("div.current").removeClass("current");
// $("div").eq(paragraph).addClass("current");
// $("submit").click(function(){
// 	$(".ipsum").find("")
// });
