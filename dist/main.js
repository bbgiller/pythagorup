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
/***/ (function(module, exports) {

eval("\nclass Game {\n    constructor() {\n\n    }\n\n    drawCanvas(ctx) {\n        ctx.fillStyle = 'grey';\n        ctx.fillRect(0, 0, 200, 500);\n\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const Shape = require('./shape');\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst Rectangle = __webpack_require__(/*! ./rectangle */ \"./src/rectangle.js\");\nconst Triangle = __webpack_require__(/*! ./triangle */ \"./src/triangle.js\");\n\n\n// window.Rectangle = Rectangle;\n// window.Shape = Shape;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById('board');\n    const ctx = canvas.getContext('2d');\n    const game = new Game;\n    const rect = new Rectangle(100,200,0,'red',100, 200);\n    const triangle = new Triangle(0, 0, 0, 'blue', 3, 4, 0, 0, 0)\n    game.drawCanvas(ctx);\n    rect.drawRectangle(ctx);\n    triangle.drawTriangle(ctx);\n})\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/rectangle.js":
/*!**************************!*\
  !*** ./src/rectangle.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shape.js\");\n\n\nclass Rectangle extends Shape {\n    constructor(xPos, yPos, vel, color, length, width) {\n        super(xPos, yPos, vel, color);\n\n        this.length = length;\n        this.width = width;\n\n    }\n\n    area() {\n        return(\n            Math.floor(this.length * this.width) \n        )\n    }\n\n    perimeter() {\n        return(\n            Math.floor(2 * this.length) + Math.floor(2 * this.width)\n        )\n    }\n\n    diagonal() {\n        return(\n            (this.length**2 + this.width**2)**0.5\n        )\n    }\n\n    drawRectangle(ctx) {\n        ctx.fillStyle = \"red\";\n        ctx.fillRect(this.xPos, this.yPos, 50, 70)\n    }\n\n};\n\nmodule.exports = Rectangle;\n\n//# sourceURL=webpack:///./src/rectangle.js?");

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nclass Shape {\n    constructor(xPos, yPos, vel, color) {\n        this.xPos = xPos;\n        this.yPos = yPos;\n        this.vel = vel;\n        this.color = color;\n        this.destroyed = false;\n        this.stopped= false;\n    }\n};\n\n\nmodule.exports = Shape;\n\n//# sourceURL=webpack:///./src/shape.js?");

/***/ }),

/***/ "./src/triangle.js":
/*!*************************!*\
  !*** ./src/triangle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Shape = __webpack_require__(/*! ./shape */ \"./src/shape.js\");\n\n\nclass Triangle extends Shape {\n    constructor(xPos, yPos, vel, color, base, height, theta1, theta2, theta3) {\n        super(xPos, yPos, vel, color);\n\n        this.base = base;\n        this.height = height;\n        this.theta1 = theta1;\n        this.theta2 = theta2;\n        this.theta3 = theta3;\n     \n    }\n\n    area() {\n        return(\n            Math.floor(0.5 * (this.base * this.height)) \n        )\n    }\n\n\n    drawTriangle(ctx) {\n\n    ctx.beginPath();\n    ctx.moveTo(25, 25);\n    ctx.lineTo(105, 25);\n    ctx.lineTo(25, 105);\n    ctx.fill(); \n\n    }\n\n};\n\nmodule.exports = Triangle;\n\n//# sourceURL=webpack:///./src/triangle.js?");

/***/ })

/******/ });