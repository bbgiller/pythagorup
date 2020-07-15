// const Shape = require('./shape');
const Game = require('./game');
const Rectangle = require('./shapes/rectangle');
const Triangle = require('./shapes/triangle');
const Circle = require('./shapes/circle');
const GameView = require('./game_view');


// window.Rectangle = Rectangle;
// window.Shape = Shape;
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('board');
    const problem = document.getElementById('problem')
    const ctx = canvas.getContext('2d');
    const problemCtx = problem.getContext('2d');
    // debugger
    const game = new Game(canvas, ctx, problem, problemCtx);
    game.render()
    
    // const gameView = new GameView(game, ctx)
 
    // const shape = game.randomShape()
    // shape.displayRandomProblem(problemCtx);
    // gameView.fall(700, shape)
})




