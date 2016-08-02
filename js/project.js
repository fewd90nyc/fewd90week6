/*$( document ).ready(function() {
    console.log( "ready!" );
});*/

$(document).ready(function() {
	$("nav a").click(function(){
		$("nav a.current").removeClass("current");
		$(this).addClass("current");
	});
	$("#submit").click(function(){
		var ipsumType = $("#" + $(".current").attr("data-ipsum"));
		var numPar = $("#paragraphs").val();
		var showPar = ipsumType.find("p").slice(0, numPar);
		console.log(showPar);
		ipsumType.show();
		showPar.slideDown(500);
	});
  	$("#paragraphs").focus(function() {
    	$("#paragraphs").val("");
    	$(".ipsum").slideUp(1000, function() {
      		$("p").hide();
    	});
  	});
});