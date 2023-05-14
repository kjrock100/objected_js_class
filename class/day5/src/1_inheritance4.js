
// 상속과 생성자(constructor)
// class Person {
//   constructor(name) { this.name = name; }
// }
// // const person = new Person("susan");
// // console.log(person.name);

// class Student extends Person {
//   // constructor() {}
// }
// const susan = new Student("susan");
// console.log(susan.name);



// super: 부모 클래스의 생성자나 메서드를 호출할 수 있는 특수한 키워드
class Parent {
  constructor() {}
}
class Child extends Parent {
  constructor() {
    super(); // Parent.call(this);
  }    
}

const child = new Child();









