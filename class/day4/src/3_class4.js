// 프로퍼티 이야기

// 1. 인스턴스 프로퍼티
// class Person {
//   constructor(name) {
//     this.name = name;  // 인스턴스 프로퍼티
//   }
// }
// const susan  = new Person("susan");
// console.log(susan.name);

// 2. 접근자 프로퍼티
// const person = {
//   firstName: "daniel",
//   lastName: "kang",
//   get fullName() { return this.firstName + " " + this.lastName; },
//   set fullName(name) { [this.firstName, this.lastName] = name.split(" "); }
// }

// console.log(person.fullName);  // == person.fullName()
// person.fullName = "paul kim";  // person.fullName("paul kim");
// console.log(person.fullName);

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  get fullName() { return this.firstName + " " + this.lastName; }
  set fullName(name) { [this.firstName, this.lastName] = name.split(" "); }
}
const person = new Person("daniel", "kang");
console.log(person.fullName);  // -> person.fullName();

person.fullName = "monica choi";
console.log(person.fullName);











