
// 정적(static) 프로퍼티와 메서드 이야기
// 정적 프로퍼티와 메서드는 인스턴스(객체) 없이 생성자 함수만을 사용하여 참조 
// 또는 호출할 수 있는 프로퍼티와 메서드

function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() { console.log(`hi, i'm ${this.name}!`); }

const daniel = new Person("daniel");
console.log(daniel.name);
daniel.sayHello();

// 정적 프로퍼티와 메서드 추가
Person.staticProperty = "static property";
Person.staticMethod = function() { console.log("static method"); };

console.log(Person.staticProperty);
Person.staticMethod();

daniel.staticMethod();  // ERROR



