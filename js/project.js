// // link categories to ipsum source (data code attribute already links these?)
// // select category of ispum --> "current"
// apply css color or assign class current?
$(document).ready(function(){
  	$("nav a").click(function(){
  		$("nav a.current").removeClass("current");
  		$(this).addClass("current");
  	});
  	// $("nav a").click(function(){
  	// 	$("nav a.").css("current", "color"));
  	// 	$("nav a.").html("current", $(this).data("ipsum"));
  	// });
  
  // // click button to display paragraphs in frame below
  	$("#submit").click(function(){
  		var dataIpsum = $(".current").attr("data-ipsum");
  		var curentIpsum = $("#" + dataIpsum);
  		var input = $("#paragraphs").val();
  		var display = curentIpsum.find("p").slice(0, input);
  		curentIpsum.show();
  		display.slideDown(200);
  		// console.log();
  	});
 });

// Collapse paragraph display(??help!)
//   $("button").click(function(){
//   $(this).remove("p");
// });
