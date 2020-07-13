const Shape = require('./shape');


class Rectangle extends Shape {
    constructor(xPos, yPos, vel, color, length, width) {
        super(xPos, yPos, vel, color);

        this.length = length;
        this.width = width;

    }

    area() {
        return(
            Math.floor(this.length * this.width) 
        )
    }

    perimeter() {
        return(
            Math.floor(2 * this.length) + Math.floor(2 * this.width)
        )
    }

    diagonal() {
        return(
            (this.length**2 + this.width**2)**0.5
        )
    }

    drawRectangle(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xPos, this.yPos, 50, 70)
    }

};

module.exports = Rectangle;