const Game = require('./game');


class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;


    }

    fall() {
        const shape = this.game.randomShape()
        setInterval(
            () => shape.moveDown(this.ctx), 10
        )
    }


}

module.exports = GameView