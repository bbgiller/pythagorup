/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Rectangle = __webpack_require__(/*! ./shapes/rectangle */ \"./src/shapes/rectangle.js\");\nconst Circle = __webpack_require__(/*! ./shapes/circle */ \"./src/shapes/circle.js\");\nconst Triangle = __webpack_require__(/*! ./shapes/triangle */ \"./src/shapes/triangle.js\");\n\nconst COLORS = ['red', 'orange', 'blue', 'green','purple', 'yellow']\n\nclass Game {\n    constructor(canvas,ctx, problem, problemCtx, welcomeCtx) {\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.problem = problem;\n        this.problemCtx = problemCtx;\n        this.boardHeight = 800;\n        this.boardWidth = 400;\n        this.shapeXPos = 200;\n        this.shapeYPos = 0;\n        this.stopHeight = 800;\n        this.welcomeCtx = welcomeCtx\n\n        this.problemAnswer = 0;\n\n        this.shapes = {};\n\n        this.fall = this.fall.bind(this);\n        this.randomShape = this.randomShape.bind(this);\n        this.render = this.render.bind(this);\n        this.populateShapes = this.populateShapes.bind(this);\n    }\n\n    drawCanvas(ctx) {\n        ctx.fillStyle = 'white';\n        ctx.fillRect(0, 0, 400, 800);\n\n    }\n\n    \n\n    randomRectangle() { //generate new instance of rectangle with random width/height\n        const randLength = Math.floor(Math.random() * Math.floor(100))+50;\n        const randWidth = Math.floor(Math.random() * Math.floor(100))+30;\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n        const centerX = this.shapeXPos - Math.floor(randWidth/2.0)\n\n        return new Rectangle(centerX, this.shapeYPos, randColor, randLength, randWidth);\n    }\n\n    randomCircle() {\n        const randRadius = Math.floor(Math.random() * Math.floor(40)+20);\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n\n        return new Circle(this.shapeXPos, this.shapeYPos, randColor, randRadius);\n    }\n\n    randomTriangle() { //generate new instance of rectangle with random width/height\n        const randBase = Math.floor(Math.random() * Math.floor(100));\n        const randHeight = Math.floor(Math.random() * Math.floor(100));\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n\n        return new Triangle(this.shapeXPos, this.shapeYPos, randColor, randBase, randHeight);\n    }\n\n    randomShape() {\n        const randNum = Math.floor(Math.random() * Math.floor(2));\n\n        if (randNum === 0) return this.randomRectangle();\n        if (randNum === 1) return this.randomCircle();\n        // return this.randomTriangle();\n\n    }\n    fall(ctx, shape) {\n        console.log(this.stopHeight)\n\n        shape.moveDown(ctx, this.stopHeight)\n        this.stopHeight -= (shape.width || (2* shape.radius ))\n\n        console.log(this.stopHeight)\n\n        \n        \n        \n       \n        \n    }\n\n    welcomeScreen() {\n        this.welcomeCtx.fillStyle = 'black';\n        this.welcomeCtx.fillRect(0, 0, 400, 800);\n\n    this.welcomeCtx.font = 'italic 18px Arial';\n    this.welcomeCtx.textAlign = 'center';\n    this.welcomeCtx. textBaseline = 'middle';\n    this.welcomeCtx.fillStyle = 'white';  // a color name or by using rgb/rgba/hex values\n    this.welcomeCtx.fillText('Welcome to Pythagorup!', 200, 350);\n    this.welcomeCtx.fillText('Click anywhere to start!', 200, 450);\n\n    this.canvas.addEventListener('click', () => {\n        this.welcomeCtx.fillStyle = 'white'\n        this.welcomeCtx.fillRect(0, 0, 400, 800);\n            this.render()\n    } )\n\n\n    }\n\n    populateShapes() {\n        let i = 0;\n        while (i < 5) {\n            const shape = this.randomShape();\n            this.shapes[i] = (shape)\n            i++;\n        }\n        // debugger\n    }\n\n    // startGame(e) {\n    //     if (e.key ===) {\n\n    //     }\n    // }\n\n    displayRandomProblem(ctx, shape) {\n        // debugger\n        ctx.clearRect(0, 0, 400, 300);\n\n        ctx.fillStyle = \"black\";\n        ctx.font = \"8pt sans-serif\";\n        const randProblem = shape.randomProblem()\n        const randProbText = randProblem[0];\n        const randProbAnswer = randProblem[1];\n        ctx.fillText(randProbText,20,20);\n\n        return randProbAnswer \n\n    }\n\n    updateValue(e) {\n        console.log(e.target.value);\n        \n      }\n\n    answerInput() {\n        const answer = document.getElementById('answer');\n\n        answer.addEventListener('input',this.updateValue)\n\n    }\n\n\n\n    // reset() {\n    //     this.render()\n    // }\n\n\n\n    render() {\n        // debugger\n        // this.ctx.fillStyle = 'black';\n        // this.welcomeScreen()\n        \n        this.populateShapes();\n        this.fall(this.ctx, this.shapes[1]);\n        const randProbAnswer = this.displayRandomProblem(this.problemCtx, this.shapes[1]);\n        this.problemAnswer = randProbAnswer\n        console.log(this.problemAnswer)\n        this.answerInput()\n        // if(this.stopHeight < 1) {\n            // this.reset()\n        // }\n        \n\n        // cancelAnimationFrame(request);\n    }\n\n\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n        this.stopHeight = 700;\n\n\n    }\n\n    fall(stopHeight, shape) {\n        if(stopHeight < 1) return null;\n        // debugger\n        // const shape = this.game.randomShape();\n        setInterval( \n            () => shape.moveDown(this.ctx, stopHeight), 10\n        )\n        \n        const newHeight = stopHeight - (shape.width || shape.radius);\n        // return this.fall(newHeight)\n        \n    }\n\n    // multiFall() {\n    //     let stacked = false;\n    //     //stacked will be true when stopHeight < 1\n\n    //     while (!stacked) {\n            \n\n    //         if (sha)\n\n       \n\n    //     }\n\n    // }\n\n\n\n\n}\n\nmodule.exports = GameView\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Shape = require('./shape');\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Rectangle = __webpack_require__(/*! ./shapes/rectangle */ \"./src/shapes/rectangle.js\");\nconst Triangle = __webpack_require__(/*! ./shapes/triangle */ \"./src/shapes/triangle.js\");\nconst Circle = __webpack_require__(/*! ./shapes/circle */ \"./src/shapes/circle.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n// window.Rectangle = Rectangle;\n// window.Shape = Shape;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const welcomeScreen = document.getElementById('welcome');\n    const welcomeCtx = welcomeScreen.getContext('2d');\n    const canvas = document.getElementById('board');\n    const problem = document.getElementById('problem')\n    const ctx = canvas.getContext('2d');\n    const problemCtx = problem.getContext('2d');\n    // debugger\n    const game = new Game(canvas, ctx, problem, problemCtx, welcomeCtx);\n    // game.answerInput()\n    game.welcomeScreen()\n    \n    // const gameView = new GameView(game, ctx)\n \n    // const shape = game.randomShape()\n    // shape.displayRandomProblem(problemCtx);\n    // gameView.fall(700, shape)\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shapes/circle.js":
/*!******************************!*\
  !*** ./src/shapes/circle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\n\n\nclass Circle extends Shape {\n    constructor(xPos, yPos, color, radius) {\n        super(xPos, yPos, color);\n\n        this.radius = radius;\n    }\n\n    area() {\n        return(\n             Math.PI * this.radius**2 \n        )\n    }\n\n    areaProblem() {\n        return `Calculate the area of given circle with radius ${this.radius} `\n    }\n\n    \n\n    randomProblem() {\n        return [this.areaProblem(), this.area()];\n\n    }\n\n    // displayRandomProblem(ctx) {\n    //     // debugger\n    //     ctx.fillStyle = \"black\";\n    //     ctx.font = \"8pt sans-serif\";\n    //     ctx.fillText(this.randomProblem(),20,20);\n\n    // }\n\n\n\n    draw(ctx) {\n        //draws background\n        // ctx.fillStyle = 'white';\n        // ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later\n\n\n\n        ctx.beginPath();\n        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n    unDraw(ctx) {\n        // debugger\n        ctx.fillStyle = 'white'\n    }\n\n    moveDown(ctx, stopHeight) {\n        setInterval( \n            () => {\n\n                if (this.yPos + this.radius < stopHeight ) {\n                    ctx.fillStyle = 'white'\n                    ctx.fillRect(0, 0, 400, this.yPos + this.radius)\n                    // this.unDraw(ctx);\n                    this.yPos++;\n                    this.draw(ctx)\n                    \n                    \n                }\n\n            }, 10\n        )\n\n        // console.log(this.stopheight)\n        // this.stopheight -= this.width;\n    }\n\n};\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack:///./src/shapes/circle.js?");

/***/ }),

/***/ "./src/shapes/rectangle.js":
/*!*********************************!*\
  !*** ./src/shapes/rectangle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\nconst Game = __webpack_require__(/*! ../game */ \"./src/game.js\")\n\n\nclass Rectangle extends Shape {\n    constructor(xPos, yPos, color, length, width) {\n        super(xPos, yPos, color);\n\n        this.length = length;\n        this.width = width;\n        this.stopheight = 800;\n\n    }\n\n    area() {\n        return(\n            (this.length * this.width) \n        )\n    }\n\n    areaProblem() {\n        return `Calculate the area of given rectangle with length ${this.length} and width ${this.width} `\n    }\n\n    perimeter() {\n        return(\n            (2 * this.length) + Math.floor(2 * this.width)\n        )\n    }\n\n    perimeterProblem() {\n        return `Calculate the perimeter of given rectangle with length ${this.length} and width ${this.width} `\n    }\n\n    diagonal() {\n        return(\n            (this.length**2 + this.width**2)**0.5\n        )\n    }\n\n    diagonalProblem() {\n        return `Calculate the diagonal of given rectangle with length ${this.length} and width ${this.width} `\n    }\n\n    randomProblem() {\n        const problemNum = Math.floor(Math.random() * Math.floor(3));\n        if (problemNum === 0) return [this.areaProblem(), this.area() ];\n        if (problemNum === 1) return [this.perimeterProblem(), this.perimeter()];\n        if (problemNum === 2) return [this.diagonalProblem(), this.diagonal()];\n    }\n\n    // displayRandomProblem(ctx) {\n    //     // debugger\n    //     ctx.fillStyle = \"black\";\n    //     ctx.font = \"8pt sans-serif\";\n    //     ctx.fillText(this.randomProblem(),20,20);\n    // }\n\n    draw(ctx) {\n        //draws background\n        // ctx.fillStyle = 'white';\n        // ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later\n\n\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.xPos, this.yPos, this.length, this.width);\n        //displays width\n        ctx.fillStyle = \"black\";\n        ctx.font = \"8pt sans-serif\";\n        ctx.fillText(`${this.width}`, this.xPos + 5, (this.width / 2));\n        //displays length\n        ctx.fillStyle = \"black\";\n        ctx.font = \"8pt sans-serif\";\n        ctx.fillText(`${this.length}`, this.xPos + (0.5 * this.width) , (this.width - 10));\n\n    }\n\n\n    unDraw(ctx) {\n        // debugger\n        // ctx.fillStyle = 'black'\n    }\n\n    moveDown(ctx, stopHeight) {\n        setInterval( \n            () => {\n\n                if (this.yPos + this.width < stopHeight ) {\n                    ctx.fillStyle = 'white'\n\n                    ctx.fillRect(0, 0, 400, this.yPos + this.width)\n                    // this.unDraw(ctx);\n                    this.yPos++;\n                    this.draw(ctx)\n                    \n                    \n                }\n\n            }, 10\n        )\n\n        // console.log(this.stopheight)\n        // this.stopheight -= this.width;\n    }\n\n};\n\nmodule.exports = Rectangle;\n\n//# sourceURL=webpack:///./src/shapes/rectangle.js?");

/***/ }),

/***/ "./src/shapes/shape.js":
/*!*****************************!*\
  !*** ./src/shapes/shape.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Shape {\n    constructor(xPos, yPos, color) {\n        this.xPos = xPos;\n        this.yPos = yPos;\n        this.color = color;\n        this.destroyed = false;\n        this.stopped= false;\n    }\n\n};\n\n\nmodule.exports = Shape;\n\n//# sourceURL=webpack:///./src/shapes/shape.js?");

/***/ }),

/***/ "./src/shapes/triangle.js":
/*!********************************!*\
  !*** ./src/shapes/triangle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\n\n\nclass Triangle extends Shape {\n    constructor(xPos, yPos, color, base, height) {\n        super(xPos, yPos, color);\n\n        this.base = base;\n        this.height = height;\n     \n    }\n\n    area() {\n        return(\n            Math.floor(0.5 * (this.base * this.height)) \n        )\n    }\n\n\n    draw(ctx) {\n\n    //draws background\n    ctx.fillStyle = '#3cb4c3';\n    ctx.fillRect(0, 0, 400, 800) //will need to change dimmensions later\n\n\n    ctx.beginPath();\n    ctx.moveTo(this.xPos, this.yPos);\n    ctx.lineTo(this.xPos-this.base, this.yPos);\n    ctx.lineTo(this.xPos, this.base);\n    \n    ctx.fillStyle = this.color;\n    ctx.fill(); \n\n    }\n\n    unDraw(ctx) {\n        // debugger\n        ctx.fillStyle = '#3cb4c3'\n    }\n\n    moveDown(ctx) {\n        this.unDraw(ctx);\n        this.yPos++;\n        this.draw(ctx)\n    }\n\n};\n\nmodule.exports = Triangle;\n\n//# sourceURL=webpack:///./src/shapes/triangle.js?");

/***/ })

/******/ });