
// 프로토타입 교체

// function Rectangle(width, height) {
// 	this.width = width;
// 	this.height = height;
// }
// Rectangle.prototype.area = function() { return this.width * this.height; }

// const r = new Rectangle(2,3);
// console.log(r.area());

// function Square(length) {
// 	this.length = length;
// }
// Square.prototype.area = function() { return this.length ** 2; }

// const s = new Square(2);
// console.log(s.area());

// 프로토타입 교체 방법 1. 생성자 함수 사용
// function Person(name) {
//   this.name = name;
// }

// // Person 생성자 함수의 프로토타입을 다른 객체로 교체합니다.
// // 이 때, 프로토타입의 생성자 프로퍼티가 삭제되므로 아래와 같이 
// // 복원을 해주셔야 합니다.
// Person.prototype = { 
//   constructor: Person,
//   sayHello() { console.log(`Hi, I'm ${this.name}!`); }
// };

// const paul = new Person("paul");

// // 동적 인스턴스 생성
// const susan = new paul.constructor("susan");
// console.log(susan.name);

// 프로토타입 교체 방법 2. 인스턴스(객체)의 사용
// function Person(name) {
//   this.name = name;
// }
// const daniel = new Person("daniel");

// const myPrototype = {
//   constructor: Person,
//   sayHello() { console.log(`Hi, I'm ${this.name}!`); }
// };

// // 1. 생성자 함수의 프로토타입을 교체합니다.
// Person.prototype = myPrototype;

// // 2. 인스턴스 프로토타입을 교체한다.
// daniel.__proto__ = myPrototype;

// daniel.sayHello();
// const susan = new daniel.constructor("susan");
// susan.sayHello();

// 아래의 코드를 프로토타입 교체를 사용하여 상속을 구현해 보세요 :D
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
// Square.prototype.area = function() { return this.length ** 2; }
Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

const s = new Square(2);
console.log(s.area());

const s1 = new s.constructor(3);
console.log(s1.area());