// function Rectangle(width, height) {
// 	this.width = width;
// 	this.height = height;
// }
// Rectangle.prototype.area = function() { return this.width * this.height; }

// function Square(length) {
//   Rectangle.call(this, length, length);
// }
// Square.prototype = Rectangle.prototype;
// Square.prototype.constructor = Square;

// const r = new Rectangle(2,3);
// const r1 = new r.constructor(2,3);  // const r1 = new Square(2,3);
// console.log(r1.area());  // ?

// * Object.create(prototype);
// -> 인자로 전달된 객체를 프로토타입으로 하는 새로운 객체를 생성하는 메서드
// const o = Object.create(Object.prototype);  // const o = {};


// function Rectangle(width, height) {
// 	this.width = width;
// 	this.height = height;
// }
// Rectangle.prototype.area = function() { return this.width * this.height; }

// function Square(length) {
//   Rectangle.call(this, length, length);
// }
// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// const r = new Rectangle(2,3);
// const r1 = new r.constructor(2,3);  // const r1 = new Rectangle(2,3);
// console.log(r1.area());

const Rectangle = (function() {
  function Rectangle(width, height) {
    this.width = width;
    this.height = height;
  }
  Rectangle.prototype.area = function() { return this.width * this.height; };
  return Rectangle;
})();

const r = new Rectangle(2,3);
console.log(r.area());

const Square = (function() {
  function Square(length) {
    Rectangle.call(this, length, length);
  }
  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;
  
  return Square;
})();

const s = new Square(2);
console.log(s.area(2));