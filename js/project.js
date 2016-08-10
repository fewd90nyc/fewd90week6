$(document).ready(function(){

		$("nav a").click(function() {
    		$("nav a.current").removeClass("current");
		    $(this).addClass("current");
		});

		$('#submit').click(function(){
			var ipsumType = $('nav a.current').attr('data-ipsum');
            var $ipsumElement = $('#' + ipsumType);
            var numParagraphs = $('#paragraphs').val();
            $ipsumElement.find('p').slice( 0, numParagraphs).css({'display':'block'});
            $ipsumElement.slideDown();
		});

		$('#paragraphs').focus(function(){
			$('.ipsum').slideUp(500, function() {
                $(this).find('p').css({'display': 'none'});
            });
		});
});
