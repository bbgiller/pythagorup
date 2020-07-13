

class Shape {
    constructor(xPos, yPos, vel, color) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.vel = vel;
        this.color = color;
        this.destroyed = false;
        this.stopped= false;
    }
};


module.exports = Shape;