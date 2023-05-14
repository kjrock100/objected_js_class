
// function Person() {}
// console.log(Person.prototype.constructor === Person);

// function Person(name) {
// 	this.name = name;
// 	++(this.__proto__.count);
// }
// Person.prototype.count = 0;

// const p1 = new Person("daniel");
// const p2 = new Person("susan");

// console.log(p2.count);	// 프로토타입의 프로퍼티는 객체의 식별자를 사용하여
//                         // 접근할 수 있습니다.


// 원의 넓이를 계산하는 객체를 생성합니다.
function Circle(radius) {
	this.radius = radius;
}
Circle.prototype.getArea = function() { return 3.14 * this.radius ** 2; };

const c1 = new Circle(2);
console.log(c1.getArea());

const c2 = new Circle(3);
console.log(c2.getArea());









