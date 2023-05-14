// 실행 컨텍스트
// 해당 소스코드를 실행하기 위해 사용되는 환경

// 실행 컨텍스트 스택
// const x = 1;

// function foo() {
//   const y = 2;
  
//   function bar() {
//     const z = 3;
//     console.log(x + y + z);
//   }
//   bar();
// }

// foo();




var x = 1;
const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;
  
  function bar(b) {
    const z = 5;
    console.log(z + b + y + x + a);
  }
  bar(10);
}
foo(20);











