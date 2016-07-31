$(document).ready(function(){
	//highlite functions
	$("nav a").click(function(){
		//var whichSub = $(this).index()+1
		$("nav a.current").removeClass("current");
		$(this).addClass("current");
		//$("nav :nth-child("+whichSub+")").addClass("current");
		//$(this).html($("[data-ipsum=""]");
	});

	$("button").click(function(){
		//var currentId = $("nav a.current").data("ipsum");
		var ipsumType = $(".current").attr("data-ipsum");
		var selectedIpsum = $("#" + ipsumType);
		var numPar = $("#paragraphs").val();
		var showP = selectedIpsum.find("p").slice(0, numPar);
		console.log(showP);
		selectedIpsum.show();
		showP.slideDown(500);

		//show div ipsum withe ID that ='s var currentId
		//$(".ipsum, p").slideDown(500);

		//var whichP = $(this).index()+1
		//$(this).addClass("current");
		//$("div p.current").removeClass("current");
		//$("div :nth-child("+whichP+")").addClass("current");
		
		//$("nav a.current").removeClass("current");
		//$("div p.current").removeClass("current");
	});

	$("input").focus(function(){
		$("input").val('');
		$(".ipsum p").slideUp(500, function() {
			$(".ipsum").hide();
		});
	});
});
//document.getElementById("paragraphs").onfocus = clearParagraphs;

	//function clearParagraphs() {
  	//document.getElementById("paragraphs").value = "";
	//}

//When the user clicks or tabs into the form field: 
//- The field should clear and the revealed ipsum
//should disappear with a sliding animation.
