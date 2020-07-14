const Shape = require('./shape');
const Game = require('../game')


class Rectangle extends Shape {
    constructor(xPos, yPos, color, length, width) {
        super(xPos, yPos, color);

        this.length = length;
        this.width = width;

    }

    area() {
        return(
            (this.length * this.width) 
        )
    }

    perimeter() {
        return(
            (2 * this.length) + Math.floor(2 * this.width)
        )
    }

    diagonal() {
        return(
            (this.length**2 + this.width**2)**0.5
        )
    }

    draw(ctx) {
        //draws background
        ctx.fillStyle = '#3cb4c3';
        ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later


        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.length, this.width);
        //displays width
        ctx.fillStyle = "black";
        ctx.font = "8pt sans-serif";
        ctx.fillText(`${this.width}`, this.xPos + 5, (this.width / 2));
        //displays length
        ctx.fillStyle = "black";
        ctx.font = "8pt sans-serif";
        ctx.fillText(`${this.length}`, this.xPos + (0.5 * this.width) , (this.width - 10));

    }


    unDraw(ctx) {
        // debugger
        ctx.fillStyle = '#3cb4c3'
    }

    moveDown(ctx) {
        this.unDraw(ctx);
        this.yPos++;
        this.draw(ctx)
    }

};

module.exports = Rectangle;