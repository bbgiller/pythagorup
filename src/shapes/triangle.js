const Shape = require('./shape');


class Triangle extends Shape {
    constructor(xPos, yPos, color, base, height, theta1, theta2, theta3) {
        super(xPos, yPos, color);

        this.base = base;
        this.height = height;
        this.theta1 = theta1;
        this.theta2 = theta2;
        this.theta3 = theta3;
     
    }

    area() {
        return(
            Math.floor(0.5 * (this.base * this.height)) 
        )
    }


    drawTriangle(ctx) {

    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill(); 

    }

};

module.exports = Triangle;