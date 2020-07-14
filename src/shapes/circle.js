const Shape = require('./shape');


class Circle extends Shape {
    constructor(xPos, yPos, color, radius) {
        super(xPos, yPos, color);

        this.radius = radius;
    }

    area() {
        return(
            Math.floor( ( Math.pi * this.radius )**2 ) 
        )
    }



    draw(ctx) {
        
        ctx.beginPath();
        ctx.arc(75, 175, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

};

module.exports = Circle;