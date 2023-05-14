
// 내부 슬롯과 내부 메서드
// const obj = {};

// 자바스크립트에서 모든 객체는 [[Prototype]]이라는 내부 슬롯을 가지고 있습니다.
// 이는 자바스크립트 엔진의 내부이므로 원칙적으는 직접 접근이 불가능합니다.
// obj.[[Prototype]];


// 하지만 대부분의 자바스크립트 런타임에서 이를 간접적으로 접근할 수 있도록
// __proto__라는 프로퍼티를 제공합니다.
// console.log(obj.__proto__);

// 생성자 함수와 비생성자 함수
// 자바스크립트에서는 함수도 객체이므로 여러 프로퍼티를 갖는다.
// 이 때, 어떤 함수가 일반 함수로 호출되면 함수 객체 내부의 [[Call]]이라는 내부 메서드가
// 호출됩니다. 그리고 new 연산자와 함께 호출되면 [[Construct]]라는 내부 메서드가
// 호출됩니다.

// 여기서 [[Call]]이라는 내부 메서드를 가진 함수 객체를 callable이라고 하며
// [[Construct]]라는 내부 메서드를 가진 함수를 Constructor라고 한다.
// 그리고 [[Construct]]를 갖지 않는 함수 객체를 Non-Constructor라고 한다.

// 모든 함수 객체는 callable이지만 모든 함수 객체가 Constructor인 것은 아니다.
// Constructor: 함수 선언문, 함수 표현식, 클래스(나중에 설명합니다.)
// Non-Constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수

// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {}
const bar = function() {}

// 객체의 프로퍼티에 할당된 함수도 일반 함수입니다.
const goo = {
	x: function() {}
};

// 일반 함수로 정의된 함수는 Constructor이다.
new foo();
new bar();
new goo.x();

// 메서드: ES6의 메서드 축약 표현만 메서드로 인정함
const obj = {
	x() {}
};
const arrow = () => {}

// new obj.x(); ERROR
new arrow();











