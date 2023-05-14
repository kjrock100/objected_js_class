
// 프로토타입과 상속
function Circle(radius) {
	this.radius = radius;
}
Circle.prototype.getArea = function() { return 3.14 * this.radius ** 2; };

const c1 = new Circle(2);
console.log(c1.getArea());

const c2 = new Circle(3);
console.log(c2.getArea());