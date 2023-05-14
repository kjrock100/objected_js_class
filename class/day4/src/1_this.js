
// 2. 메서드 호출 방식

// const person = {
//   name: "daniel",
//   getName() { 
//     // 현재 메서드를 호출한 객체를 참조합니다.
//     return this.name;
//   }
  
//   // getName: function() { return this.name; }
// }
// console.log(person.getName());  // daniel

// const anotherPerson = { name: "susan" };
// anotherPerson.getName = person.getName;
// console.log(anotherPerson.getName());  // susan

// const getName = person.getName;
// console.log(getName());  // 일반 함수 호출 방식, this -> global

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() { return this.name; }

const paul = new Person("paul");
console.log(paul.getName());  // paul

Person.prototype.name = "daniel";
console.log(Person.prototype.getName());  // daniel










