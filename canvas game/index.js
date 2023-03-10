var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var t1x = canvas.width / 4;
var t1y = canvas.height - 50;
var deg = 10;

var dx = 3;
var dy = -3;
const paddleHeight = 48;
const paddleWidth = 70;
const t1Height = 48;
const t1Width = 70;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight) / 2;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function rotate_img() {
    let base_image = new Image();
    base_image.src = 'tank1_p.png';
    let rad = deg * Math.Pi / 180;
    ctx.translate(t1x + t1Width / 2, t1y + t1Height / 2);
    ctx.rotate(rad)
    ctx.drawImage(base_image, t1Width / 2 * -1, t1Height / 2 * -1, t1Width, t1Height)
    ctx.rotate(rad * -1)
    ctx.translate((t1x + t1Width / 2) * -1, (t1y + t1Height / 2) * -1);
}

function make_base() {
    let base_image = new Image();
    base_image.src = 'tank1_p.png';
    ctx.drawImage(base_image, t1x, t1y);
}

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        upPressed = true;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    } if (e.key === "Up" || e.key === "ArrowUp") {
        upPressed = false;
    } if (e.key === "Down" || e.key === "ArrowDown") {
        downPressed = false;
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    make_base();

    /*if (rightPressed) {
        paddleX += 7;
    } else if (leftPressed) {
        paddleX -= 7;
    } else if (upPressed) {
        paddleY -= 7;
    } else if (downPressed) {
        paddleY += 7;
    }*/
    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
        t1x = Math.min(t1x + 7, canvas.width - t1Width);
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        rotate_img()
    } if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
        t1x = Math.max(t1x - 7, 0);
    } if (upPressed) {
        paddleY = Math.max(paddleY - 7, 0);
        t1y = Math.max(t1y - 7, 0);
    } if (downPressed) {
        paddleY = Math.min(paddleY + 7, canvas.height - paddleHeight);
        t1y = Math.min(t1y + 7, canvas.height - t1Height);
    }


    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);