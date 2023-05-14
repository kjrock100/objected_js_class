
//
// 객체 생성 방법 3. Object 생성자 함수
//
const obj = new Object();	// obj = {}
console.log(obj);

// 사람의 이름을 저장하는 객체를 생성
const paul = new Object();
paul.name = "paul";
paul.getName = function() { return this.name; }
console.log(paul.getName());

// 원시 타입과 배열 등에 대하여 내장 생성자 함수를 제공합니다.
const obj1 = new String("paul");
console.log(obj1);

const obj2 = new Number(123);
console.log(obj2);

const obj3 = new Boolean(true);
console.log(obj3);

const obj4 = new Function("x", "return x ** 2;");
console.log(obj4);

const obj5 = new Array(1,2,3);
console.log(obj5);
