$(document).ready(function() {
    let blade1 = $("#blade1")
    blade1.click(function(e) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        moveBlade(mouseX, mouseY);
    });

    function moveBlade(x, y) {
        
        dot.setAttribute("cx", x);
        dot.setAttribute("cy", y);
        dot.setAttribute("r", "2");
        dot.setAttribute("stroke", "black");
        dot.setAttribute("stroke-width", "5");
        svgSnowman.append(dot);
    }

    
});