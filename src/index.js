// const Shape = require('./shape');
const Game = require('./game');
const Rectangle = require('./rectangle');
const Triangle = require('./triangle');
const Circle = require('./circle');


// window.Rectangle = Rectangle;
// window.Shape = Shape;
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('board');
    const ctx = canvas.getContext('2d');
    const game = new Game;
    const rect = new Rectangle(100,200,0,'red',100, 200);
    const triangle = new Triangle(0, 0, 0, 'blue', 3, 4, 0, 0, 0);
    const circle = new Circle(0,0,0,'blue',200);
    game.drawCanvas(ctx);
    rect.drawRectangle(ctx);
    triangle.drawTriangle(ctx);
    circle.drawCircle(ctx);
})




