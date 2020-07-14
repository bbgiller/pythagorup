// const Shape = require('./shape');
const Game = require('./game');
const Rectangle = require('./shapes/rectangle');
const Triangle = require('./shapes/triangle');
const Circle = require('./shapes/circle');


// window.Rectangle = Rectangle;
// window.Shape = Shape;
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');
    const game = new Game;
    // const rect = game.randomRectangle();
    // const circle = game.randomCircle();
    // const triangle = game.randomTriangle()
    // const circle = new Circle(0,0,'blue',20);
    game.drawCanvas(ctx);
    // // rect.drawRectangle(ctx);
    // triangle.drawTriangle(ctx);
    // circle.drawCircle(ctx);

    game.randomShape().draw(ctx)
})




