const Shape = require('./shape');


class Triangle extends Shape {
    constructor(base, height, theta1, theta2, theta3) {
        super(type,pos,vel,color,destroyed,stopped);
        this.type = 'triangle';
        this.base = base;
        this.height = height;
        this.theta1 = theta1;
        this.theta2 = theta2;
        this.theta3 = theta3;
    }

    area() {
        return(
            0.5 * (this.base / this.height)
        )
    }
    
};

module.exports = Triangle;