$(document).ready(function() {
    let svgdiv = $("#svg-div")
    
    svgdiv.click(function(e) {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        $(svgdiv).append('<svg class="svg"><g id="dart" class="dart" transform="translate(300,0)"><polygon points="1.5,630 0.1,500 -0.1,500 -1.5,530" fill="black" ></polygon><polygon points="0,632 14,629 12,609 0,600 -12,609 -14,629" fill="#B20600" stroke="black" stroke-width="0.5px"></polygon><polygon points="-3,631.4 0,632 3,631.4 6,540 3,530 -3,530 -6,540" fill="#B20600" stroke="black" stroke-width="0.5px" /></g> </svg>')
        moveDart(mouseX, mouseY);
        $(dart).removeAttr('id')

    })
    function moveDart(mouseX, mouseY) {
        console.log(mouseX + ":" + mouseY)
        $(dart).animate({
            y: mouseY-500
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

    $("#svg-btn").click(function () {
        $("svg").each(function () {
            if (this.id != "svg") {
                this.remove();
            }
        });
    });
});