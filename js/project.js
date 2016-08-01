$(document).ready(function(){
//	$("nav").click(function(){
// 		$(".current").hover(function(){
//			 var current = $(this).attr("data-ipsum");
//			 $(this).css({
//				 "color" : "#F8FF73",
//			 });
//		 });
//	});

	// $("nav").mouseenter(function() {
		// ("current",data-ipsum);
	// });
// })

// $("nav").click(function(){
  // $(this).addClass(".current");
// });
	// $("nav").hover(function(){
	    // $(this).css({
	    	// "color" : "#F8FF73",
	    // });
	// });

	// $(".thumb").click(function() {
  // var imgSrc = $(this).attr("src");

  // $("#bigimage").fadeOut(1000, function(){
  		// 
    	// $("#bigimage").attr("src", imgSrc);
    	// $("#bigimage").fadeIn(1000);
 //  });
// });

	$(".ipsum").click(function() {
			var navBarSrc = $(this).attr(".current");
			$("#submit").attr(".ipsum","navBarSrc");
			$(this).css({
				"color" : "red",
			});

			});
	 });




	









