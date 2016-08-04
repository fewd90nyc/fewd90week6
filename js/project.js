//=======================
// Global Variables
//=======================
var _ipsumDiv;


//=======================
// Initialization
//=======================
setIpsumDiv();


//=======================
// Event Handling
//=======================
$("nav a").click(function() {
	clearData();

	$("nav a").removeClass("current");
	$(this).addClass("current");

	setIpsumDiv();
});


$("#paragraphs").click(clearData);
$("#paragraphs").focus(clearData);

$("#submit").click(function(){
	setIpsumDiv();

	var numParagraphs = $("#paragraphs").val();
	var actualParagraphs = _ipsumDiv.find("p").length;
	var Input = ValidateInput(numParagraphs, actualParagraphs);

	if (!Input.IsValid) {
		$("#error-message p").text(Input.ErrorMessage)
							 .css(
							 		{
							 			display:"block",
							 			color: "red",
							 			fontSize: "large"
							 		});
		return;
	}

	_ipsumDiv.find("p")
			 .slice(0, numParagraphs)
			 .css("display", "block");

	_ipsumDiv.slideDown("slow");

});


//=======================
// Function Declarations
//=======================
function setIpsumDiv() {
	var selectedIpsum = $("nav a.current").attr("data-ipsum");
	_ipsumDiv = $("div #" + selectedIpsum);
}

function clearData() {
	$("#paragraphs").val("");
	$("#error-message p").text("");

	_ipsumDiv.slideUp("slow");

	_ipsumDiv.find("p")
		 	 .css("display", "none");
}

function ValidateInput(numParagraphs, actualParagraphs, errorMessage) {
	var errorMessage = "";

	if(isNaN(numParagraphs)) {
		errorMessage = "Enter an actual number.		";
	} else if (numParagraphs <= 0) {
		errorMessage = "Enter a number greater than zero.";
	} else if (numParagraphs > actualParagraphs) {
		errorMessage = "Sorry sizzle lips.  There are only " + actualParagraphs
						 + " paragraphs to dispaly.";
	}

	return {
		ErrorMessage: errorMessage,
		IsValid: (errorMessage == "")
	};
}