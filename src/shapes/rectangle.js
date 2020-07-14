const Shape = require('./shape');


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

    drawRectangle(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.xPos, this.yPos, this.length, this.width)
    }

};

module.exports = Rectangle;