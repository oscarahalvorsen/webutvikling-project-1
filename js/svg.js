$(document).ready(function() {
    let svg = $("#svg")
    svg.click(function(e) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        moveDart(mouseX, mouseY);

    })
    function moveDart(mouseX, mouseY) {
        $(dart).animate({
            y: mouseY-600
        }, 
        {   
            step: function(y, fy) {
                $(this).css({
                transform: 'translate('+mouseX+'px, '+y+'px)'
                });
            },
            duration:'slow'
            },'linear',
        );
    }
});