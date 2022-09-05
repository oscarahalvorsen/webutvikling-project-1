$(document).ready(function() {
    let svgdiv = $("#svg-div")
    svgdiv.click(function(e) {
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

// $(document).ready(function() {
//     let svg = $("#svg")
//     let svgs = $(".svgs")
//     $(svgs).append('<svg id="svg2"><circle cx="30" cy="30" r="30" fill="#404040" stroke-width="1px" stroke="green"/><polygon points="1.5,630 0.1,600 -0.1,600 -1.5,630" fill="black" ></polygon><polygon points="0,732 14,729 12,709 0,700 -12,709 -14,729" fill="grey" stroke="black" stroke-width="0.5px"></polygon><polygon points="-3,731.4 0,732 3,731.4 6,640 3,630 -3,630 -6,640" fill="grey" stroke="black" stroke-width="0.5px" /></svg>')
//     svg.click(function(e) {
//         let mouseX = e.offsetX;
//         let mouseY = e.offsetY;
//         moveDart(mouseX, mouseY);

//     })
//     function moveDart(mouseX, mouseY) {
//         $(dart).animate({
//             y: mouseY-600
//         }, 
//         {   
//             step: function(y, fy) {
//                 $(this).css({
//                 transform: 'translate('+mouseX+'px, '+y+'px)'
//                 });
//             },
//             duration:'slow'
//             },'linear',
//         );
//     }
// });