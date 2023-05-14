// private 필드

// 자바스크립트에서 인스턴스 프로퍼티는 항상 public한 특성을 가지므로
// 외부에서 접근이 가능합니다.
// function Person(name) {
//   this.name = name;
// }
// const person = new Person("susan");
// console.log(person.name);

// class Person {
//   constructor(name) { this.name = name; }
// }
// const person = new Person("susan");
// console.log(person.name);

// class Person {
//   // private 속성의 프로퍼티를 사용하려면 반드시 클래스 필드로 정의해야 합니다.
//   // 이 때, 필드명은 반드시 #으로 시작해야 합니다.
//   #name = "private";
  
//   // 클래스 내부의 메서드(생성자 포함)에서 private 속성의 프로퍼티에 접근하려면
//   // #과 함께 사용하셔야 합니다.
//   constructor(name) { this.#name = name; }
// }

// const susan = new Person("susan");
// console.log(susan.#name);  // private 필드는 내부 메서드에서만 참조할 수 있습니다.


// private 속성을 가진 프로퍼티의 참조
class Susan {
  #name = "susan";
  #age;
  constructor(age) { this.#age = age; }
  display() { console.log(`name: ${this.#name}, age: ${this.#age}`)}
  
  get age() { return this.#age; }
  set age(age) { this.#age = age; }
}

const susan = new Susan(25);

console.log(susan.age);
susan.age = 15
console.log(susan.age);
















