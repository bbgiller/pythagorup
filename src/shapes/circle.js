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

    areaProblem() {
        return `Calculate the area of given circle with radius ${this.radius} `
    }

    

    randomProblem() {
        const problemNum = Math.floor(Math.random() * Math.floor(0));
        if (problemNum === 0) return this.areaProblem();

    }

    displayRandomProblem(ctx) {
        // debugger
        ctx.fillStyle = "black";
        ctx.font = "8pt sans-serif";
        ctx.fillText(this.randomProblem(),20,20);

    }



    draw(ctx) {
        //draws background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later



        ctx.beginPath();
        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    unDraw(ctx) {
        // debugger
        ctx.fillStyle = 'white'
    }

    moveDown(ctx) {
        if (this.yPos + this.radius < 800) {

            this.unDraw(ctx);
            this.yPos++;
            this.draw(ctx)
        }
    }

};

module.exports = Circle;