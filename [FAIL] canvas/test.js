var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function make_base() {
    let base_image = new Image();
    base_image.onload = function () {
        ctx.drawImage(base_image, 400, 400);
    }
    base_image.src = 'tank1_p2.png'; // set the image source after the onload function is defined
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    make_base();
    requestAnimationFrame(draw);
}

make_base(); // load the image before starting the animation
draw(); // start the animation
