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

//	$(".ipsum").click(function() {
	//		$(this).attr(".current","a");
//			$("#submit").attr(".ipsum","navBarSrc");
//				$(this).css({
				
	// });
 
//$("nav").click(function() {
//        $(this).attr(".current","a");
//    });

//$(".current").attr("a",".current");


//	$("nav").mouseover(function(){
//		$(this).css({
//			"height": "100",
//			"color" : "red"
//		});
//		$(this).animate({
//			"font-size" : "100px"
//		})
//	});

		$("nav a").click(function() {
    		$("nav a").removeClass("current");
		    $(this).addClass("current");
		   
		});

		$("button").click(function(){
			$(".ipsum").slideDown("p");
			$("p").slideDown();

		});

		$("button").click(function(){
			$("p").slideUp();

		});


 });
// click bacon 
// show corresponding bacon ipsum  
// click hipster
// hide bacon ipsum
// show hipster ipsum









