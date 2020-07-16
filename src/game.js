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

        this.problemAnswer = 0;
        this.problemAnswerFunction = this.problemAnswerFunction.bind(this);

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
        console.log(this.stopHeight)

        shape.moveDown(ctx, this.stopHeight)
        this.stopHeight -= (shape.width || (2* shape.radius ))

        console.log(this.stopHeight)

        
        
        
       
        
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
        this.welcomeCtx.fillStyle = 'white'
        this.welcomeCtx.fillRect(0, 0, 400, 800);
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

    displayRandomProblem(ctx, shape) {
        // debugger
        ctx.clearRect(0, 0, 400, 300);

        ctx.fillStyle = "black";
        ctx.font = "8pt sans-serif";
        const randProblem = shape.randomProblem()
        const randProbText = randProblem[0];
        const randProbAnswer = randProblem[1];
        ctx.fillText(randProbText,20,20);

        return randProbAnswer 

    }

    problemAnswerFunction() {
        return this.problemAnswer;
    }

    // updateValue(e) {
    //     debugger
    //     const toNum = parseInt(e.target.value, 10)
    //     console.log(`entered value: ${typeof toNum}`)
    //     console.log(`answer: ${this.problemAnswer}`)
    //     if(toNum === this.problemAnswer) {
    //         console.log('Correct! Shape will destroy')
    //     };
        
    //   }

    answerInput() {
        const answer = document.getElementById('answer');

        answer.addEventListener('input',(e) => {
            // debugger
            const toNum = parseInt(e.target.value, 10)
            console.log(`entered value: ${typeof toNum}`)
            console.log(`answer: ${this.problemAnswer}`)

            if(toNum === this.problemAnswer) {
                        console.log('Correct! Shape will destroy')
                    }
            
        })

    }



    // reset() {
    //     this.render()
    // }



    render() {
        // debugger
        // this.ctx.fillStyle = 'black';
        // this.welcomeScreen()
        
        this.populateShapes();
        this.fall(this.ctx, this.shapes[1]);
        const randProbAnswer = this.displayRandomProblem(this.problemCtx, this.shapes[1]);
        this.problemAnswer = randProbAnswer
        console.log(`answer in render: ${this.problemAnswer}`)
        this.answerInput()
        // if(this.stopHeight < 1) {
            // this.reset()
        // }
        

        // cancelAnimationFrame(request);
    }




}

module.exports = Game;