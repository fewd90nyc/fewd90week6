$(document).ready(function(){
	$("nav a").click(function(){
		$("nav a.current").removeClass("current");
		$(this).addClass("current");
	});

	$("button").click(function(){
		var ipsumType = $(".current").attr("data-ipsum");
		var selectedIpsum = $("#" + ipsumType);
		var numPar = $("#paragraphs").val();
		var showP = selectedIpsum.find("p").slice(0, numPar);
		console.log(showP);
		selectedIpsum.show();
		showP.slideDown(500);
	});

	$("input").focus(function(){
		$("input").val('');
		$(".ipsum p").slideUp(500, function() {
			$("div .ipsum").hide(500);
		});
	});
});