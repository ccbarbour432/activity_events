/* JQuery Starting File */

$(document).ready(function() {

// Changes Paragraph text when button is clicked
$("#changeTextBtn").click(function() {
    $("#freshText").text("Now I am a new sentence!")
});

// Changes Paragraph text when button is double-clicked
$("#changeTextBtn").dblclick(function() {
    $("#freshText").text("I am a sentence.")
});

// Hide the Paragraph after button is clicked
$("#hideTextBtn").click(function() {
    $("#freshText").hide();
});

//Show the Sentence after button is clicked
$("#showTextBtn").click(function() {
    $("#freshText").show();
});


// Hover effects on the color-box
$("#box").mouseover(function() {
    $(this).css("background-color", "red");
    $(this).text("Ow! That hurts!");
});

$("#box").mouseout(function() {
    $(this).css("background-color", "#ddd");
    $(this).text("Please don't do that again...");
});

// Animates the image on the webpage
$("#animateBtn").click(function() {

    $("#animateBox").animate({
        left: "500px",
        width: "400px",
        height: "400px"
    }, 500)

    .animate({
        left: "0px",
        width: "100px",
        height: "100px"
    }, 3000);

});

});