$(document).ready(function(){
 $("nav a).click(function(){ 
 	$("nav a.current").removeClass("current");
 	$(this).addClass("current");
 	var lang = $(this).attr("data-ipsum");	
	$(".ipsum").attr("id", lang);
});
 $("#submit").click(function(){
  $(this).fadeOut();
  $(this).hide();
})