

class Shape {
    constructor(xPos, yPos, color) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.color = color;
        this.destroyed = false;
        this.stopped= false;
    }
};


module.exports = Shape;