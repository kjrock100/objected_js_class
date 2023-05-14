function Circle() {}

Circle.prototype.PI = 3.14;
Circle.prototype.area = function(r) { return this.PI * r**2; }

// const c = new Circle();
// console.log(c.area(2));
console.log(Circle.prototype.area(2));