//opening > 
//on click nav apply .current class to this 
//On generate # of paragrahs is returned, selected ipsum revealed with slide
//logic = take value and return that number of p from clicked ipsum
//click or tab into form, field needs to clear, ipsum disappears with slide
//define # value
//function to return text

$("nav a").click(function(){
    $("nav. current").removeClass(".current");
    $(this).addClass(".current");
  });

var 
$(#Submit).click(function(){
  var = numParagraphs ("paragraphs" +.value);
}

//on click return numParagraphs entered (array)
.click(function(){
  $(#paragraphs).slice(0,# - 1);
//(start,stop)

//hide ipsum on focus event
$("paragraphs").focus(function(){
  $(.ipsum).focus.slideUp;
});

// Function to blank-out the inputs on focus
document.getElementById("form").onfocus = clearParagraph;

function clearParagraph() {
  document.getElementById("form").value = "";
}


  