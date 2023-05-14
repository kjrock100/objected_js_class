// this 이야기

// // this란 자신이 속한 객체 또는 자신이 생성할 인스턴스를 참조할 수 있는 특수한 식별자

// // 1. 자신이 속한 객체의 참조
// const circle = {
//   radius: 2,
//   area() { return 3.14 * this.radius ** 2; }
// };

// // 2. 자신이 생성할 인스턴스를 참조
// function Circle(radius) {
//   this.radius = radius;  
// }


// this는 함수가 호출되는 방식 또는 시점에 따라 this에 연결(binding)되는 객체가
// 다릅니다.

// 브라우저 환경에서 this는 전역 객체인 window를 가리킨다.
// console.log(this);  // window

// Node.js 환경에서 전역의 this는 전역 객체가 해당 모듈의 객체가 반환됩니다.
// console.log(this); // {}

// 만약 전역 객체를 참조하려면 global이라는 키워드를 사용하시면 됩니다.
// console.log(global);

function func() {
  // 일반 함수의 내부에서 this는 전역 객체를 가리킵니다.
  console.log(this);
}
func();

const person = {
  name: "paul",
  printThis() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킵니다.
    console.log(this);
  }  
};
person.printThis();

function Person(name) {
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킵니다.
  this.name = name;
  console.log(this);
}
const daniel = new Person("daniel");

// this는 함수가 어떻게 호출되었는지에 따라 동적으로 결정됩니다.


















