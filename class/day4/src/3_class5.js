
// 클래스 필드 이야기
// class Person {
//   name;  // 인스턴스 프로퍼티
//   constructor(name) { this.name = name; }
// }

// const susan = new Person("susan");
// console.log(susan.name);

class Susan {
  // 클래스 필드에서 바로 초기화를 살 수 있습니다.
  // name;
  // constructor() { this.name = "susan"; }
  name = "susan";
}
const susan = new Susan();
console.log(susan.name);





