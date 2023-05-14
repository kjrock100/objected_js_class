
// 변수 선언 키워드
// 1. var
// 2. let
// 3. const

// var: 변수를 선언하기 위한 키워드
// var x = "x";
//     y = "y";
// console.log(x, y);

// (function() {
//   // var 키워드를 사용하여 변수를 선언하면 지역 스코프를 갖습니다.
//   var z = "z" 
// })();
// // console.log(z);  // ERROR

// (function() {
//   // var 키워드를 사용하지 않고 변수를 선언하면 전역 스코프를 갖습니다.
//   z = "z";
// })();
// console.log(z);  // ??

// 자바스크립트는 지역 스코프를 갖는 변수를 선언할 수 있도록 var 키워드를 제공합니다.

// var의 문제
// var age = 20;

// // 1. 변수를 중복 선언할 수 있습니다. -> 기존 변수의 값을 덮어 쓸 수 있으므로
// // 버그를 발생하는 원인이 될 수 있습니다.
// var age = 30;
// console.log(age);

// // 2. 선언되기 이전에 변수를 사용할 수 있습니다(호이스팅). -> 코드의 이해를 어렵게 합니다
// console.log(name);
// var name;


// var n = 1;
// (function() {
//   console.log(n); // undefined
  
//   var n = 2;
//   console.log(n); // 2
// })();


// let: var 키워드의 문제를 해결하기 위해 추가된 키워드

// // 1. 변수를 선언만 할 수 있습니다.
// let x; // var x;
// console.log(x);  // undefined

// // 2. let 키워드는 중복 선언을 허용하지 않습니다.
// let age = 20;
// // let age = 30;  // ERROR
// console.log(age);

// // 3. 선언되기 이전에 사용할 수 없습니다.
// // -> let으로 선언된 변수 또한 호이스팅이 됩니다.
// // 다만 초기화되지 않는 상태에서 참조하면 오류가 발생합니다.
// console.log(name);
// let name;

// if (true) {
//   var v = "var";  // 전역 변수로 해석됩니다.
//   let l = "let";  // 블록 밖에서는 접근할 수 없습니다.
// }
// console.log(v); 
// // console.log(l);  // ERROR

// for (var i = 0; false;) {}
// console.log(i);

// for (let j = 0; false;) {}
// console.log(j);    // ERROR

// 3. const: let과 동일하나 다른 점이 있다면 변수에 재할당이 불가능합니다.

// -----------------------------------------------------------------------------------

// 스코프 체인
// 전역은 최상위 스코프
// const x = "x";

// function foo() {
//   // 상위 스코프
  
//   function bar() {
//     // 지역 스코프
//     console.log(x);
//   }
//   bar();
// }
// foo();

// 자바스크립트는 이러한 스코프를 연결하여 관리하는데 이를 스코프 체인이라고 합니다.

// --------------------------------------------------------------------------------------

// 렉시컬 스코프

var x = "global";

function foo() {
  var x = "local";
  
  bar();
}

function bar() {  console.log(x); }

// 상위 스코프를 결정하는 방법
// 1. 동적 스코프: 함수를 호출한 시점에서 상위 스코프를 결정
// 2. 정적 스코프 또는 렉시컬 스코프: 함수를 정의한 시점에서 상위 스코프를 결정
foo();

// 자바스크립트는 렉시컬 스코프를 사용합니다.



























