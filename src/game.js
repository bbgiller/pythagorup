const Rectangle = require('./shapes/rectangle');
const Circle = require('./shapes/circle');
const Triangle = require('./shapes/triangle');

const COLORS = ['red', 'orange', 'blue', 'green','purple', 'yellow']

class Game {
    constructor(canvas,ctx, problem, problemCtx, welcomeCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.problem = problem;
        this.problemCtx = problemCtx;
        this.boardHeight = 800;
        this.boardWidth = 400;
        this.shapeXPos = 200;
        this.shapeYPos = 0;
        this.stopHeight = 800;
        this.welcomeCtx = welcomeCtx

        this.shapes = {};

        this.fall = this.fall.bind(this);
        this.randomShape = this.randomShape.bind(this);
        this.render = this.render.bind(this);
        this.populateShapes = this.populateShapes.bind(this);
    }

    drawCanvas(ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, 400, 800);

    }

    

    randomRectangle() { //generate new instance of rectangle with random width/height
        const randLength = Math.floor(Math.random() * Math.floor(100))+50;
        const randWidth = Math.floor(Math.random() * Math.floor(100))+30;

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];
        const centerX = this.shapeXPos - Math.floor(randWidth/2.0)

        return new Rectangle(centerX, this.shapeYPos, randColor, randLength, randWidth);
    }

    randomCircle() {
        const randRadius = Math.floor(Math.random() * Math.floor(40)+20);

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];

        return new Circle(this.shapeXPos, this.shapeYPos, randColor, randRadius);
    }

    randomTriangle() { //generate new instance of rectangle with random width/height
        const randBase = Math.floor(Math.random() * Math.floor(100));
        const randHeight = Math.floor(Math.random() * Math.floor(100));

        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];

        return new Triangle(this.shapeXPos, this.shapeYPos, randColor, randBase, randHeight);
    }

    randomShape() {
        const randNum = Math.floor(Math.random() * Math.floor(2));

        if (randNum === 0) return this.randomRectangle();
        if (randNum === 1) return this.randomCircle();
        // return this.randomTriangle();

    }
    fall(ctx, shape) {
        // if(this.stopHeight < 1) return null;
        // debugger
        // const shape = this.game.randomShape();
        // setInterval( 
        //     () => shape.moveDown(ctx, this.stopHeight), 10
        // )
        shape.moveDown(ctx)
        
        // const newHeight = stopHeight - (shape.width || shape.radius);
        // return this.fall(newHeight)
        
    }

    welcomeScreen() {
        this.welcomeCtx.fillStyle = 'black';
        this.welcomeCtx.fillRect(0, 0, 400, 800);

    this.welcomeCtx.font = 'italic 18px Arial';
    this.welcomeCtx.textAlign = 'center';
    this.welcomeCtx. textBaseline = 'middle';
    this.welcomeCtx.fillStyle = 'white';  // a color name or by using rgb/rgba/hex values
    this.welcomeCtx.fillText('Welcome to Pythagorup!', 200, 350);
    this.welcomeCtx.fillText('Click anywhere to start!', 200, 450);

    this.canvas.addEventListener('click', () => {
            this.render()
    } )


    }

    populateShapes() {
        let i = 0;
        while (i < 5) {
            const shape = this.randomShape();
            this.shapes[i] = (shape)
            i++;
        }
        // debugger
    }

    // startGame(e) {
    //     if (e.key ===) {

    //     }
    // }


    render() {
        // debugger
        // this.ctx.fillStyle = 'black';
        // this.welcomeScreen()
        
        this.populateShapes();
        this.fall(this.ctx, this.shapes[1]);
        this.shapes[1].displayRandomProblem(this.problemCtx);
        

        // cancelAnimationFrame(request);
    }




}

module.exports = Game;