
// 자바스크립트에서 타입
// 1. 원시 타입: 숫자, 문자열, 논리, undefined, null, Symbol
// 2. 객체 타입: 원시 타입을 제외한 나머지 ex) 객체, 함수, 배열 등

//
// 1. 원시 타입
//

// * 원시 값이란 원시 타입의 값을 의미
// - 숫자형 값: 3.14, -10, ...
// - 문자열형 값: "hello", ...
// - 논리형 값: true, false
// -> 원시 타입의 값은 변경이 불가능합니다. 이러한 값의 특성을 불변성이라고 합니다.

// * 값의 복사
// let data = 30;
// let copy = data;	// 값의 복사
// copy = 0;
// console.log(data);	// 30

//
// 2. 객체 타입
//

// 자바스크립트에서 원시 타입을 제외한 모든 타입을 객체 타입이라고 함
// 객체는 복합적인 자료구조이므로 원시 타입과는 다른 방식으로 동작함

// * 객체 타입의 값인 객체는 변경 가능한 값입니다.
// let person = { name: "paul" };
// console.log(person);

// person.name = "daniel";
// console.log(person);

// person.age = 0;
// console.log(person);

// delete person.age;
// console.log(person);

// const 키워드는 값을 불변으로 만드는 것이 아니라 변수의 재할당을 금지하는 키워드
// const person = { name: "daniel", age: 20 };
// console.log(person);

// person.name = "susan";
// console.log(person);

// person.age = 0;
// console.log(person);

// 객체를 불변으로 만들고 싶다면 Object.freeze 메서드를 사용하시면 됩니다.
// 프로퍼티 추가 X
// 프로퍼티 삭제 X
// 프로퍼티 갱신 X
// 프로퍼티 읽기 O
// const person = { name: "paul" };
// Object.freeze(person);

// person.name = "daniel";	// 실패하여 넘어갑니다. 다만 strict 모드에서는 오류가 발생합니다.
// console.log(person);

// person.age = 10;
// console.log(person);

// delete person.name;
// console.log(person);

// 주의! 중첩된 객체에 대해서는 동결되지 않습니다.
// 이를 얕은 상수화(shallow freeze)라고 합니다.
// const person = {
// 	name: "paul",
// 	friends: ["daniel", "susan"]	// 객체
// };
// Object.freeze(person);
// person.name = "monica";
// console.log(person);

// person.friends[0] = "monica";

// // 중첩된 객체까지 상수화하려면 재귀 호출을 사용해야 합니다.
// console.log(person);

// * 객체의 복사
// 객체의 경우, 원시 타입과 동일한 정잭으로 복사를 수행하게 되면 2가지 문제가
// 발생하게 됩니다.
// 1. 객체의 추가적인 생성으로 인한 오버헤드 발생
// 2. 원본 객체로부터 모든 프로퍼티를 복사해야 하므로 복사에 대한 오버헤드 발생
// 3. 메모리 사용량 증가
// -> 이를 해결하기 위해 객체를 공유하는 정책을 사용합니다.

// 객체를 공유하기 위해 객체의 위치 정보를 사용합니다.


const p1 = { name: "daniel", age: 20};
const p2 = p1;

p2.name = "";
p2.age = 0;

console.log(p1);

// 중접된 객체까지 완벽하게 복사(deep copy)를 수행하려면 역시나 재귀 호출을
// 사용해야 합니다.




