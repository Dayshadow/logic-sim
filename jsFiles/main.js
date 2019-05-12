//the canvas setup is in utils.ts
let b = new Board();
//test:
function gameLoop() {
    ctx.clearRect(0, 0, w, h);
    if (leftMouseClicked == true) {
        let tileAtMouse = b.getTileFromCoords(mouse.x, mouse.y);
        console.log(tileAtMouse);
        tileAtMouse.gate = new Gate('and', Math.floor(mouse.x / b.tileSize) * b.tileSize, Math.floor(mouse.y / b.tileSize) * b.tileSize, b.tileSize);
    }
    b.draw();
    requestAnimationFrame(gameLoop);
}
gameLoop();
// http://www.categories.acsl.org/wiki/index.php?title=Digital_Electronics
