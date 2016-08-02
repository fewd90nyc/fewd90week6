// When nav a is selected update class to current. Update p dispay to block.  
// When a number of paragraphs is entered and generate button is clicked return lorem ipsum.

$(document).ready(function() {
  $("nav a").click(function() {
    $("nav a").removeClass("current");
    $(this).addClass("current");
  });

  $("#submit").click(function() {
    var selector = "#" + $("nav a.current").data("ipsum");
    $(".ipsum").hide();
    $(selector).find("p").slice(0, $("#paragraphs").val()).show();
    $(selector).slideDown(400);
  });

  $("#paragraphs").focus(function() {
    $("#paragraphs").val("");
    $(".ipsum").slideUp(1000, function() {
      $("p").hide();
    });
  });
});


// $(document).ready(function() {
// 	$("nav a").click(function() {
// 		$("nav a").removeClass("current");
// 		$(this).addCLass("current"); 
// });

// // $("#submit").click(function() {
// // 	var selector = "#" + $("nav a.current").data("ipsum");
// // 	$(".ipsum").hide();
// // 	$(selector.find("p").slice(0, $("#paragraphs").val()).show();
// // 	// var ipsumType = $("nav a.current").attr("data-ipsum");
// // 	// $("#" + ipsumType).slideDown();
// // 	$(selector).slideDown(400);
// // });

// // $("#paragraphs").focus(function() {
// // 	$("#paragraphs").val("");
// // 	$(".ipsum").slideUp(1000), function() {
// // 		$("p").hide();
// // 		});
// // 	});
// // });



// var numParagraphs = $("#paragraphs").val();
// console.log(numParagraphs);
// }
// });

// $("#paragraphs").focus.(function(){
// 	$(".ipsum").slideUp();
// }

// // $(this).find(".ipsum").function({
// //     $(.ipsum).css("display", "block");
// // 	});

// // $(this).find("p").function({
// //     $(p).css("display", "block");
// // 	});
