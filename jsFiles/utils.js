// Canvas setup
let c = document.getElementById("canvas idk");
let ctx = c.getContext('2d');
let w = window.innerWidth;
let h = window.innerHeight;
c.width = w;
c.height = h;
let keys = [];
window.addEventListener('keypress', (e) => {
    if (!(keys.indexOf(e.key) > -1)) {
        keys.push(String.fromCharCode(e.keyCode));
        keys.map((x) => { return x.toLowerCase(); });
        console.log(keys);
    }
});
window.addEventListener('keyup', function (e) {
    keys = keys.filter((x) => { return (x != e.key); });
});
let mouse = {
    x: undefined,
    y: undefined
};
document.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});
let rightMouseClicked = false;
let leftMouseClicked = false;
function handleMouseDown(e) {
    //e.button describes the mouse button that was clicked
    // 0 is left, 1 is middle, 2 is right
    if (e.button === 2) {
        rightMouseClicked = true;
    }
    if (e.button === 0) {
        leftMouseClicked = true;
    }
}
function handleMouseUp(e) {
    if (e.button === 2) {
        rightMouseClicked = false;
    }
    if (e.button === 0) {
        leftMouseClicked = false;
    }
}
document.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);
function drawCircle(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
function distance(x, y, x1, y1) {
    const xDist = Math.abs(x1 - x);
    const yDist = Math.abs(y1 - y);
    return Math.sqrt(xDist * xDist + yDist * yDist);
}
function drawLine(x, y, x1, y1, width) {
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
}
function constraint(input, lower, upper) {
    let result = input;
    if (input < lower) {
        result = lower;
    }
    else if (input > upper) {
        result = upper;
    }
    return result;
}
//random number generator to get a random number x where: min <= x <= max
//just to make your life easier
function rd(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function renderImage(file, x, y, width, height) {
    let base_image = new Image();
    base_image.src = file;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(base_image, x, y, width, height);
}
// Takes an input from range a -> b and finds it's value in range c -> d
// Ex. rangeMap(5, 0, 10, 10, 20) Outputs 15.
function rangeMap(input, inputStart, inputEnd, outputStart, outputEnd) {
    let slope = (outputEnd - outputStart) / (inputEnd - inputStart);
    return outputStart + slope * (input - inputStart);
}
/*
lisp:
()(()()((()())(()())(print 'hello world'()()()))((())()()())()()())
[]!{}[{+![][}!+[]![]}+{!}{]1[]1=[{}!]{}+!+{!!++}}]}] <- JS heck
*/
//I thought of an easier way to evaluate than doing it recursively
//we can iterate it indefinitely until the last gate has been evaluated
//for every iteration:
//  check every gate on the board
//  if it has both inputs ready
//      send it's output to the next gate
/*
     ________
    |_______|\
    \   \   \ |
    |   |   | |
    |___|___| |
     \______\ |

*/ 
