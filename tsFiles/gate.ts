

class Gate {// ~~working on images ima sit right here > 
    //I think We probably don't need a tile class
    //it just contains a gate and doesn't have nay unique attributes
    inp1: boolean;
    inp2: boolean;
    constructor(public type: string, public x: number, public y: number, public tileSize: number) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.inp1; //the inputs will be set when they are avaliable
        this.inp2; 
    }
    evaluate() {
        if (this.inp1 === undefined || this.inp2 === undefined) {
            return; //if they aren't avaliable
        } 
        // http://73.182.213.252/liveshare-stuff/index.html 
        switch (this.type) {
            case 'buffer':
                return this.inp1;
                break;
            case 'not':
                return !this.inp1;
                break;
            case 'and':
                return this.inp1 && this.inp2;
                break;
            case 'or':
                return this.inp1 || this.inp2;
                break;
            case 'xor':
                return (this.inp1 || this.inp2) && !(this.inp1 && this.inp2);
                break;
            case 'xnorzornand':
                return (this.inp1 && this.inp2) || this.inp2 && !(this.inp1 || !this.inp2) && (this.inp1 && !this.inp1);
        }

    }

    draw() {
        if (this.type === 'or') {

        } else if (this.type === 'and') {
            console.log('called renderimage')
            renderImage('./resources/andgate.png', this.x, this.y, this.tileSize, this.tileSize);
        } else if (this.type === ''){}
        /*
            ______ 
    -------|      \
           |       |--------- 
    -------|______/
        */
    }
}







/*
how do you set up canvas in TS
~~i need to fix the building~~
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
https://www.typescriptlang.org/docs/handbook/basic-types.html
*/
