// 1. 클래스 정의
// usage: class 클래스명 {}


// 클래스 표현식
// const Klass1 = class Klass {}  // 기명 클래스 표현식, const foo = function foo() {}
// const Klass2 = class {}        // 익명 클래스 표현식, const foo = function() {}

// 클래스 정의(함수 선언문) 
// class Klass {}

// 클래스에서는 0개 이상의 메서드를 가질 수 있으며 그 종류는 다음의 3가지만 가능합니다.
// 1. constructor(생성자): 프로토타입의 constructor 프로퍼티와는 다른 개념
// 2. prototype method
// 3. static method

// class Person {
//   // 생성자
//   constructor(name) { this.name = name; }
  
//   // 메서드 축약 표현 -> 프로토타입 메서드(인스턴스 메서드)
//   sayHello() {  console.log(`Hi, I'm ${this.name}!`);  }
  
//   // 스태틱 메서드
//   static staticMethod() { console.log("static method"); } 
// }


// 2. 객체 생성
function Student() {}
const susan = new Student();
console.log(susan);

const monica = Student();
console.log(monica);  // undefined


class Person {}
const daniel = new Person();  // 클래스는 곧 생성자 함수입니다.
console.log(daniel);

// 클래스는 생성자 함수와 다르게 인스턴스(객체) 생성이 그 목적이므로 new 연산자를
// 사용하지 않으면 오류가 발생합니다.
const paul = Person();
console.log(paul);
