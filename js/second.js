alert("hello world");

$("nav a").click(function(){
    $("nav .current").removeClass("current");
    $(this).addClass("current");
});

$("#submit").click(function(){
    var ipsumType = $('nav a.current').attr('data-ipsum');
    $('#' + ipsumType).slideDown();
    var numParagraphs = $('#paragraphs').val();
    console.log(numParagraphs);
});

$('#paragraphs').focus(function(){
    $('.ipsum').slideUp();
});