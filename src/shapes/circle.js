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
        //draws background
        ctx.fillStyle = '#3cb4c3';
        ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later



        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
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

module.exports = Circle;