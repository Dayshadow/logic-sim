class Board {
    constructor() {
        this.board = [];
        this.size = 15;
        this.tileSize = w / 15;
        for (let y = 0; y < this.size; y++) {
            this.board.push([]);
            for (let x = 0; x < this.size; x++) {
                this.board[y].push(new Tile(x, y, undefined));
            }
        }
    }
    draw() {
        for (let y = 0; y < this.size; y++) {
            for (let x = 0; x < this.size; x++) {
                ctx.strokeRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                if (this.board[y][x].gate) {
                    this.board[y][x].gate.draw();
                }
            }
        }
    }
    getTileFromCoords(x, y) {
        return this.board[Math.floor(y / this.tileSize)][Math.floor(x / this.tileSize)];
    }
}
/*
you deleted my peepee :(
       ---------
       \        \
       |\ orange \
       | |_juice_|
       | |       |
       | |_______|
       | |       |
        \|_______|

       dayshadow
        ___
       |0 0|
        <_>
       /   \
      /|   |\
     |  \_/  |
        / \
       /   \

       lmao
lol


*/ 
