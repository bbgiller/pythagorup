const Shape = require('./shape');
const Game = require('../game')


class Rectangle extends Shape {
    constructor(xPos, yPos, color, length, width) {
        super(xPos, yPos, color);

        this.length = length;
        this.width = width;
        this.stopheight = 800;

    }

    area() {
        return(
            (this.length * this.width) 
        )
    }

    areaProblem() {
        return `Calculate the area of given rectangle with length ${this.length} and width ${this.width} `
    }

    perimeter() {
        return(
            (2 * this.length) + Math.floor(2 * this.width)
        )
    }

    perimeterProblem() {
        return `Calculate the perimeter of given rectangle with length ${this.length} and width ${this.width} `
    }

    diagonal() {
        return(
            (this.length**2 + this.width**2)**0.5
        )
    }

    diagonalProblem() {
        return `Calculate the diagonal of given rectangle with length ${this.length} and width ${this.width} `
    }

    randomProblem() {
        const problemNum = Math.floor(Math.random() * Math.floor(3));
        if (problemNum === 0) return this.areaProblem();
        if (problemNum === 1) return this.perimeterProblem();
        if (problemNum === 2) return this.diagonalProblem();
    }

    displayRandomProblem(ctx) {
        // debugger
        ctx.fillStyle = "black";
        ctx.font = "8pt sans-serif";
        ctx.fillText(this.randomProblem(),20,20);
    }

    draw(ctx) {
        //draws background
        // ctx.fillStyle = 'white';
        // ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later


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
        // ctx.fillStyle = 'black'
    }

    moveDown(ctx, stopHeight) {
        setInterval( 
            () => {

                if (this.yPos + this.width < stopHeight ) {
                    ctx.fillStyle = 'white'

                    ctx.fillRect(0, 0, 400, this.yPos + this.width)
                    // this.unDraw(ctx);
                    this.yPos++;
                    this.draw(ctx)
                    
                    
                }

            }, 10
        )

        // console.log(this.stopheight)
        // this.stopheight -= this.width;
    }

};

module.exports = Rectangle;