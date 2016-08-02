alert("hello world");

$("nav a").click(function(){
	$("nav .current").removeClass("current");
	$(this).addClass("current");
});

//$("#submit").click(function(){
//$(".ipsum").slideToggle(400);
//$("p").slideToggle(400);
//});

$("#submit").click(function(){
	var ipsumType = $('nav a.current').attr('data-ipsum');
	$('#' + ipsumType).slideDown();
	var numParagraphs = $('#paragraphs').val();
	console.log(numParagraphs);
});

//get the number of paragraphs from #paragraphs


$('#paragraphs').focus(function(){
	$("paragraphs").val("");
	$('.ipsum').slideUp(1000, function(){
		$("p").hide();
	});
});


// get the dataipsum value of selected nave item
//$("button").click(function(){
//$("form").removeClass("p");
//});
