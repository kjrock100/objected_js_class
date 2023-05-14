// 1. constructor(생성자)
// 생성된 인스턴스(객체)의 초기화를 수행하는 메서드
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// const daniel = new Person("daniel");  // const daniel = new Person.constructor("daniel");

// constructor 특징
// 1. 반드시 클래스 내에 1개만 존재해야 합니다. 2개 이상 존재하면 오류가 발생합니다.
// class Person {
//   constructor() {}
//   constructor(name) {}  // ERROR
// }

// 2. constructor는 생략할 수 있습니다. 만약 클래스 내에 constructor가 없다면 아무런 일도
// 하지 않는 빈 생성자가 암묵적로 정의됩니다.
class Person {
  // 자바스크립트 엔진이 다음의 constructor를 암묵적으로 정의합니다.
  // construct() {}
}

// 3. constructor 안에서 명시적 반환을 하지 않아야 합니다. 생성자 함수와 마찬가지로
// new 연산자와 함께 호출되여 암묵적으로 this를 반환하기 때문입니다.











