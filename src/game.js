const Rectangle = require('./shapes/rectangle');
const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');

const COLORS = ['red', 'orange', 'blue', 'green','purple', 'yellow']

class Game {
    constructor() {
        this.boardHeight = 800;
        this.boardWidth = 400;
        this.shapeXPos = 200;
        this.shapeYPos = 0;
    }

    drawCanvas(ctx) {
        ctx.fillStyle = '#3cb4c3';
        ctx.fillRect(0, 0, 400, this.boardHeight);

    }

    

    randomRectangle() { //generate new instance of rectangle with random width/height
        const randLength = Math.floor(Math.random() * Math.floor(100))+50;
        const randWidth = Math.floor(Math.random() * Math.floor(100))+30;

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];
        const centerX = this.shapeXPos - Math.floor(randWidth/2.0)

        return new Rectangle(centerX, this.shapeYPos, randColor, randLength, randWidth);
    }

    randomCircle() {
        const randRadius = Math.floor(Math.random() * Math.floor(40)+20);

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];

        return new Circle(this.shapeXPos, this.shapeYPos, randColor, randRadius);
    }

    randomTriangle() { //generate new instance of rectangle with random width/height
        const randBase = Math.floor(Math.random() * Math.floor(100));
        const randHeight = Math.floor(Math.random() * Math.floor(100));

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];

        return new Triangle(this.shapeXPos, this.shapeYPos, randColor, randBase, randHeight);
    }

    randomShape() {
        const randNum = Math.floor(Math.random() * Math.floor(2));

        if (randNum === 0) return this.randomRectangle();
        if (randNum === 1) return this.randomCircle();
        // return this.randomTriangle();

    }




}

module.exports = Game;