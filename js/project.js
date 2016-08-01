$(document).ready(function(){
	var which = $(".current").index(), //which tab
		num; //total number of paragraphs
	
	$("a").click(function(){
		$(".current").removeClass("current");
		$(this).addClass("current");
		which = $(".current").index(); //updates present index

		$("div.ipsum").children().hide(); //ensure that text from other anchors do not show up
		$("div.ipsum").slideUp(); //close the slide anyways when clicking the anchors
	});


	$("#paragraphs").on("input", function(){
		num = +$("#paragraphs").val();
		
		if (num > 0){
			$("#submit").click(function(){
				$("div.ipsum").eq(which).slideDown(function(){ //slide down
					$(this).children().slice(0,num).show(); //and show the text
				});
			});
		}
		else {
			$("div.ipsum").eq(which).slideUp(function(){ //slide up
				$(this).children().hide(); //and hide the text
			});
		}
	
	});
});