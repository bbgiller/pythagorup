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

eval("const Rectangle = __webpack_require__(/*! ./shapes/rectangle */ \"./src/shapes/rectangle.js\");\nconst Circle = __webpack_require__(/*! ./shapes/circle */ \"./src/shapes/circle.js\");\nconst Triangle = __webpack_require__(/*! ./shapes/triangle */ \"./src/shapes/triangle.js\");\n\nconst COLORS = ['red', 'orange', 'blue', 'green','purple', 'yellow']\n\nclass Game {\n    constructor() {\n        this.boardHeight = 800;\n        this.boardWidth = 400;\n        this.shapeXPos = 150;\n        this.shapeYPos = 0;\n    }\n\n    drawCanvas(ctx) {\n        ctx.fillStyle = 'grey';\n        ctx.fillRect(0, 0, 400, this.boardHeight);\n\n    }\n\n    \n\n    randomRectangle() { //generate new instance of rectangle with random width/height\n        const randLength = Math.floor(Math.random() * Math.floor(100));\n        const randWidth = Math.floor(Math.random() * Math.floor(100));\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n\n        return new Rectangle(this.shapeXPos, this.shapeYPos, randColor, randLength, randWidth);\n    }\n\n    randomCircle() {\n        const randRadius = Math.floor(Math.random() * Math.floor(40)+20);\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n\n        return new Circle(this.shapeXPos, this.shapeYPos, randColor, randRadius);\n    }\n\n    randomTriangle() { //generate new instance of rectangle with random width/height\n        const randBase = Math.floor(Math.random() * Math.floor(100));\n        const randHeight = Math.floor(Math.random() * Math.floor(100));\n\n        const randColor = COLORS[Math.floor(Math.random() * Math.floor(COLORS.length))];\n\n        return new Triangle(this.shapeXPos, this.shapeYPos, randColor, randBase, randHeight);\n    }\n\n    randomShape() {\n        const randNum = Math.floor(Math.random() * Math.floor(3));\n\n        if (randNum === 0) return this.randomRectangle();\n        if (randNum === 1) return this.randomCircle();\n        return this.randomTriangle();\n\n    }\n\n\n\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Shape = require('./shape');\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Rectangle = __webpack_require__(/*! ./shapes/rectangle */ \"./src/shapes/rectangle.js\");\nconst Triangle = __webpack_require__(/*! ./shapes/triangle */ \"./src/shapes/triangle.js\");\nconst Circle = __webpack_require__(/*! ./shapes/circle */ \"./src/shapes/circle.js\");\n\n\n// window.Rectangle = Rectangle;\n// window.Shape = Shape;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('board');\n    const ctx = canvas.getContext('2d');\n    const game = new Game;\n    // const rect = game.randomRectangle();\n    // const circle = game.randomCircle();\n    // const triangle = game.randomTriangle()\n    // const circle = new Circle(0,0,'blue',20);\n    game.drawCanvas(ctx);\n    // // rect.drawRectangle(ctx);\n    // triangle.drawTriangle(ctx);\n    // circle.drawCircle(ctx);\n\n    game.randomShape().draw(ctx)\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shapes/circle.js":
/*!******************************!*\
  !*** ./src/shapes/circle.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\n\n\nclass Circle extends Shape {\n    constructor(xPos, yPos, color, radius) {\n        super(xPos, yPos, color);\n\n        this.radius = radius;\n    }\n\n    area() {\n        return(\n            Math.floor( ( Math.pi * this.radius )**2 ) \n        )\n    }\n\n\n\n    draw(ctx) {\n        \n        ctx.beginPath();\n        ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI * 2, false);\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    }\n\n};\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack:///./src/shapes/circle.js?");

/***/ }),

/***/ "./src/shapes/rectangle.js":
/*!*********************************!*\
  !*** ./src/shapes/rectangle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\n\n\nclass Rectangle extends Shape {\n    constructor(xPos, yPos, color, length, width) {\n        super(xPos, yPos, color);\n\n        this.length = length;\n        this.width = width;\n\n    }\n\n    area() {\n        return(\n            (this.length * this.width) \n        )\n    }\n\n    perimeter() {\n        return(\n            (2 * this.length) + Math.floor(2 * this.width)\n        )\n    }\n\n    diagonal() {\n        return(\n            (this.length**2 + this.width**2)**0.5\n        )\n    }\n\n    draw(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.fillRect(this.xPos, this.yPos, this.length, this.width)\n    }\n\n};\n\nmodule.exports = Rectangle;\n\n//# sourceURL=webpack:///./src/shapes/rectangle.js?");

/***/ }),

/***/ "./src/shapes/shape.js":
/*!*****************************!*\
  !*** ./src/shapes/shape.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Shape {\n    constructor(xPos, yPos, color) {\n        this.xPos = xPos;\n        this.yPos = yPos;\n        this.color = color;\n        this.destroyed = false;\n        this.stopped= false;\n    }\n};\n\n\nmodule.exports = Shape;\n\n//# sourceURL=webpack:///./src/shapes/shape.js?");

/***/ }),

/***/ "./src/shapes/triangle.js":
/*!********************************!*\
  !*** ./src/shapes/triangle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shapes/shape.js\");\n\n\nclass Triangle extends Shape {\n    constructor(xPos, yPos, color, base, height) {\n        super(xPos, yPos, color);\n\n        this.base = base;\n        this.height = height;\n     \n    }\n\n    area() {\n        return(\n            Math.floor(0.5 * (this.base * this.height)) \n        )\n    }\n\n\n    draw(ctx) {\n\n    ctx.beginPath();\n    ctx.moveTo(this.xPos, this.yPos);\n    ctx.lineTo(this.xPos-this.base, this.yPos);\n    ctx.lineTo(this.xPos, this.base);\n    \n    ctx.fillStyle = this.color;\n    ctx.fill(); \n\n    }\n\n};\n\nmodule.exports = Triangle;\n\n//# sourceURL=webpack:///./src/shapes/triangle.js?");

/***/ })

/******/ });