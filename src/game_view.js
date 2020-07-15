const Game = require('./game');


class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.stopHeight = 700;


    }

    fall(stopHeight) {
        if(stopHeight < 1) return null;
        // debugger
        const shape = this.game.randomShape();
        setInterval( 
            () => shape.moveDown(this.ctx, stopHeight), 10
        )
        
        const newHeight = stopHeight - (shape.width || shape.radius);
        // return this.fall(newHeight)
        
    }

    // multiFall() {
    //     let stacked = false;
    //     //stacked will be true when stopHeight < 1

    //     while (!stacked) {
            

    //         if (sha)

       

    //     }

    // }




}

module.exports = GameView