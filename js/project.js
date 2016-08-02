// click nav a
// on click add class current to clicked item
$("nav a").click(function(){
	$("nav a.current").removeClass("current");
	$(this).addClass("current");
});
	$("#submit").click(function(){
		$(".ipsum").removeClass("current");
// get the data-ipsum value of selected 
var ipsumType = $("nav a.current").attr("data-ipsum");
$('#' + ipsumType).slideDown();

	
});
	$('#paragraphs').focus(function(){
		$(".ipsum").slideUp();
		
	});
