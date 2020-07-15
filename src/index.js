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
    const game = new Game;
    const gameView = new GameView(game, ctx)
    // const rect = game.randomRectangle();
    // window.rect = rect;
    // const circle = game.randomCircle();
    // const triangle = game.randomTriangle()
    // const circle = new Circle(0,0,'blue',20);
    // game.drawCanvas(ctx);
    // // rect.drawRectangle(ctx);
    // triangle.drawTriangle(ctx);
    // circle.drawCircle(ctx);
    window.ctx = ctx;
    // const newShape = game.randomShape()
    // newShape.draw(ctx)
    // window.newShape = newShape
    // game.displayRandomProblem(problemCtx)
    const shape = game.randomShape()
    shape.displayRandomProblem(problemCtx);
    gameView.fall(700, shape)
})




