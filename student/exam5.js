function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}
Rectangle.prototype.area = function() { return this.width * this.height; }
//----------------------------------------------------------------------------

function Square(length) {
  // return new Rectangle(length, length);
  Rectangle.call(this, length, length);
}

// Square.prototype.area = Rectangle.prototype.area;
// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

Square.prototype= {
    __proto__ : Rectangle.prototype,
    constructor: Square
}

const s = new Square(2);
console.log("squre.area:", s.area());

const r = new Rectangle(2,3);
const r1 = new r.constructor(4,5);
console.log("r1.area:", r1.area());