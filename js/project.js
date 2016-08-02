$(document).ready(function(){
	
		$("nav a").click(function() {
    		$("nav a.current").removeClass("current");
		    $(this).addClass("current");	   
		})

		$('#submit').click(function(){
			var ipsumType = $('nav a.current').attr('data-ipsum');
			$('#' + ipsumType).slideDown();
			var numParagraphs = $('#paragraphs').val();
			console.log(numParagraphs)
			console.log(ipsumType)
		//	$('#paragraphs').slice( 0, numParagraphs);
		$('#paragraphs').slice( 0, numParagraphs).css({'display':'block'});
			
		});

		$('#paragraphs').focus(function(){
			$('.ipsum').slideUp();
		});
});
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



		//$("button").click(function() {
//			$(".ipsum").slideDown("p");
//			$("p").slideDown();
			//$(".ipsum").slideToggle(400);
			//$("p").slideToggle(400);
		//});

		//$("button").click(function(){
		//	$("#form").remove("p");
		 //});

	//	$("button").click(function(){
	//		$("input text").remove("paragraphs");
	//	});

	//	$("button").click(function(){
	//		$("p").slideUp();

		//});
		//$('#submit').click(function(){
		//	alert('IT WORKS')
		//});

		//get the data value of selected nav item

// click bacon 
// show corresponding bacon ipsum  
// click hipster
// hide bacon ipsum
// show hipster ipsum









