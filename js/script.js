$(document).ready(function() {
    $( "#documentation-btn" ).click(function() {
        console.log("display block")
        if ($("#documentation").css("display")=="none") {
            $("#documentation").show()
            $("#documentation-btn").html("Hide documentation")
        } else {
            $("#documentation").hide()
            $("#documentation-btn").html("Show documentation")
        }
    });
});
