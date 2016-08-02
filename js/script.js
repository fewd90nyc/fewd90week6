$("nav a").click(function() {
    $(".current").removeClass("current");
    $(this).addClass("current");
});


$("#submit").click(function(){
	var paragraphs = $("#paragraphs").val();
	var ipsum = $(".current").data("ipsum");

    $(".ipsum").attr("id", ipsum).toggle().slideDown(3000);
    $("p").slice(paragraphs).toggle();

});
