// 1. 함수 선언문
// 아래와 같이 함수 리터럴을 단독으로 사용하면 이는 함수 선언문으로 해석합니다.
// function add(x, y) { return x + y; }

// 주의! 함수 선언문은 함수명을 생략할 수 없다.
// function (x, y) { return x + y; } -> ERROR

// 아래와 같이 함수 리터럴을 피연산자로 사용하면 이는 함수 선언문이 아닌
// 함수 리터럴(표현식)으로 해석합니다.
// const func = function add(x, y) { return x + y; };

// 함수 리터럴로 해석이 되면 함수명을 생략할 수 있습니다.
const add = function(x, y) { return x + y; };
console.log(add(1,1));


// 2. 함수 표현식
let func = function sub(x, y) { return x - y; };

// 함수 표현식은 함수 선언문과 다르게 함수명을 생략할 수 있습니다.
func = function(x, y) { return x - y; };