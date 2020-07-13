const Shape = require('./shape');


class Circle extends Shape {
    constructor(xPos, yPos, vel, color, radius) {
        super(xPos, yPos, vel, color);

        this.radius = radius;
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

    drawCircle(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(this.xPos, this.yPos, 50, 70)
    }

};

module.exports = Rectangle;