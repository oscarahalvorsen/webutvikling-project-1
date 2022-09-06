$(document).ready(function() {
    $( "#documentation-btn" ).click(function() {
        console.log("display block")
        if ($("#documentation").css("display")=="none") {
            $("#documentation").css("display", "block")
            $("#documentation-btn").html("Hide documentation")
        } else {
            $("#documentation").css("display", "none")
            $("#documentation-btn").html("Show documentation")
        }
        
    });
});
