
// 스코프 세이프 생성자 패턴은 자바스크립트 내장 생성자 함수에서도 사용됩니다.

// Object 생성자 함수는 new 연산자 없이 호출하여도 객체가 반환됩니다.
let obj = new Object();
console.log(obj);

obj = Object();
console.log(obj);

let f = new Function("x", "return x ** 2");
console.log(f);

f = Function("x", "return x ** 2");
console.log(f);

// 원시 타입의 생성자 함수의 경우, new 연산자를 사용하지 않으면 변환 함수로 동작합니다.
const objString = new String("hello");
console.log(objString);

const str = String(123);
console.log(typeof str);	// string

const num = Number("123");
console.log(typeof num);	// number

const bool = Boolean(3.14);
console.log(typeof bool);	// boolean