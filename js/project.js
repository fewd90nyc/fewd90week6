$(document).ready(function(){
//	$("nav").click(function(){
		$("nav a").mouseover(function(){
			var current = $(this).attr("href");
			$(current).css({
				"color" : "#F8FF73",
			 });
		});
//	 });
 })
