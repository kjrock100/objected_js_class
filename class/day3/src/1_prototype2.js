
// 프로토타입 체인
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() { console.log(`Hi, I'm ${this.name}!`); }

const daniel = new Person("daniel");
daniel.sayHello();
console.log(daniel.valueOf());