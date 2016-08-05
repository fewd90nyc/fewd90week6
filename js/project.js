$("nav a").click(function(){
  $("nav a.current").removeClass("current");
  $(this).addClass("current");
});

//When user clicks Generate, get the # of paragraphs.
//Find Current class and return it's data-ipsum.
//Find id matching data-ipsum and change display to block for # of paragraphs

$("#submit").click(clickSubmit);

function clickSubmit() {
	var paragraphCount = $("input").val();
	var ipsumType = $(".current").attr("data-ipsum");
	var $ipsumElem = $("#"+ipsumType);
	$ipsumElem.find("p").slice(0, paragraphCount).show();
	$ipsumElem.slideDown(400);
}

//When user clicks into field, slide up visible ipsum id and hide all <p>.

$("input").focus(reset)

function reset() {
	var ipsumType = $(".current").attr("data-ipsum");
	var $ipsumElem = $("#"+ipsumType);
	$ipsumElem.slideUp(400);
	$ipsumElem.find("p").hide();
}