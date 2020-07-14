const Shape = require('./shape');


class Circle extends Shape {
    constructor(xPos, yPos, vel, color, radius) {
        super(xPos, yPos, vel, color);

        this.radius = radius;
    }

    area() {
        return(
            Math.floor( ( Math.pi * this.radius )**2 ) 
        )
    }



    drawCircle(ctx) {
        
        ctx.beginPath();
        ctx.arc(75, 175, 50, 0, Math.PI * 2, false);
        ctx.fillStyle = "red";
        ctx.fill();
    }

};

module.exports = Circle;