let alternate = true;

$(document).ready(function() {
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    drawBoard();
    drawDart(0,0);
    
    $(canvas).click((e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        
        moveDart(mouseX, mouseY);
        setInterval(moveDart,10)
    });

    function moveDart(mouseX, mouseY) {
        console.log("canvas click" + mouseX + ":" + mouseY)
        drawBoard() 
    }

    function drawBoard() {
        radii = [160, 144, 88, 72, 16, 4]
        colors = ["#404040", "#F7F6DC"]
        ctx.strokeStyle="#ff0000"
        for (let i = 0; i < radii.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = colors[i%2]
            ctx.arc(300, 300, radii[i], 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
    
    function drawDart(x,y) {
        ctx.fillStyle = 'black';
        ctx.strokeStyle="black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(30+1.5+x,630+y);
        ctx.lineTo(30+0+x,600+y);
        ctx.lineTo(30-1.5+x,630+y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.moveTo(30+0+x,732+y);
        ctx.lineTo(30+14+x,729+y)
        ctx.lineTo(30+12+x,709+y);
        ctx.lineTo(30+0+x,700+y);
        ctx.lineTo(30-12+x,709+y);
        ctx.lineTo(30-14+x,729+y);  
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.moveTo(30-3+x,731.4+y);
        ctx.lineTo(30+0+x,732+y)
        ctx.lineTo(30+3+x,731.4+y);
        ctx.lineTo(30+6+x,640+y);
        ctx.lineTo(30+3+x,630+y);
        ctx.lineTo(30-3+x,630+y);  
        ctx.lineTo(30-6+x,640+y); 
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }

});