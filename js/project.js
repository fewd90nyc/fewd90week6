$(document).ready(function(){
//	$("nav").click(function(){
		$(".current").mouseover(function(){
			var current = $(this).attr("data-ipsum");
			$(this).css({
				"color" : "#F8FF73",
			});
		});
//	});
 })
