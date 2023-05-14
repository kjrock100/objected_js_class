// 3. 스태틱(정적) 메서드
// class Person {
//   sayHello() { console.log("Hello!"); }
//   static sayGoodbye() { console.log("Goodbye~")}
// }

// function Circle() {}
// Circle.pi = 3.14;
// Circle.area = function(radius) {
//   return this.pi * radius ** 2;  // return Circle.pi * radius ** 2;
// }
// console.log(Circle.area(2));

class Circle {
  static area(radius) {
    console.log(this);
    return 3.14 * radius ** 2;
  }
}
console.log(Circle.area(2));







