/** GLOBAL VARIABLES **/
const WIDTH = 800;
const HEIGHT = 600;
const animate = window.requestAnimationFrame;

let canvas;
let ctx;
let frame = 0;


/** GAME SETUP **/
function setup() {
    // grab the canvas
    canvas = document.querySelector('canvas');
    // use the canvas to setup the context
    ctx = canvas.getContext('2d');
    animate(draw);
}

function draw() {
    clearBackground();
    drawBackground();
    // recursion
    console.log('frame', ++frame)
    animate(draw);
}

function clearBackground() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function drawBackground() {

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
}
        

/** INTIALIZE GAME */

document.addEventListener('DOMContentLoaded', function() {
    setup();
})