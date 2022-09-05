var boardRadii = [160, 144, 88, 72, 16, 4]

var boardColors = ["#404040", "#F7F6DC"]

var needle = [
    [1.5,30], 
    [0,00],
    [-1.5,30]
]

var wings = [
    [0,132], 
    [14,129], 
    [12,109], 
    [0,100], 
    [-12,109], 
    [-14,129]
]

var body = [
    [-3,131.4], 
    [0,132], 
    [3,131.4], 
    [6,40], 
    [3,30], 
    [-3,30], 
    [-6,40]
]

var dartList = []

$(document).ready(function() {
    var canvas = $("#canvas")[0];
    var ctx = canvas.getContext("2d");
    drawBoard();

    $(canvas).click((e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        
        moveDart(mouseX, mouseY);
    });

    function moveDart(mouseX, mouseY) {
        
        for (let i = 0; i < 600; i++) {
            setTimeout(function() {
                drawBoard()
                for (let i = 0; i < dartList.length-1; i++) {
                    drawDart(dartList[i][0], dartList[i][1])
                }
                drawDart(mouseX, mouseY+600-(i+1))
            }, 1)
        }
        dartList.push([mouseX, mouseY])
    }

    function drawBoard() {
        ctx.strokeStyle="black";
        ctx.fillStyle=boardColors[1]
        ctx.lineWidth = 1;
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < boardRadii.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = boardColors[i%2]
            ctx.arc(300, 300, boardRadii[i], 0, 2*Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
    
    function drawDart(x,y) {
        ctx.strokeStyle="black";
        ctx.lineWidth = 1;

        ctx.fillStyle = 'black';
        drawDartPart(x, y, needle)
        ctx.fillStyle = 'grey';
        drawDartPart(x, y, wings)
        drawDartPart(x, y, body)
    }

    function drawDartPart(x,y, dartPart) {
        ctx.beginPath();
        for (let i = 0; i < dartPart.length; i++) {
            ctx.lineTo(dartPart[i][0]+x, dartPart[i][1]+y)
        }   
        ctx.closePath();
        ctx.fill();
        ctx.stroke()
    }

});