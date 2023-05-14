
// 함수 리터럴에서 함수의 이름은 함수 몸체 내부에서만 참조할 수 있는 식별자이다.
// 따라서 함수 몸체 외부에서는 함수 이름을 참조할 수 없다.

// 함수 리터럴을 피연산자로 해석시키는 방법 -> 연산자와 함께 사용
// (function foo() { console.log("foo"); });
// foo(); ERROR

function bar() { console.log("bar"); } // -> var bar = function bar() { console.log("bar"); }
bar(); 
