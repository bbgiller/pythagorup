const Shape = require('./shape');


class Triangle extends Shape {
    constructor(xPos, yPos, color, base, height) {
        super(xPos, yPos, color);

        this.base = base;
        this.height = height;
     
    }

    area() {
        return(
            Math.floor(0.5 * (this.base * this.height)) 
        )
    }


    draw(ctx) {

    //draws background
    ctx.fillStyle = '#3cb4c3';
    ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later


    ctx.beginPath();
    ctx.moveTo(this.xPos, this.yPos);
    ctx.lineTo(this.xPos-this.base, this.yPos);
    ctx.lineTo(this.xPos, this.base);
    
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

module.exports = Triangle;