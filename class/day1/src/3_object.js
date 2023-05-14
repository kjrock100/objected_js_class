
// 객체(object)
// 1. 컨테이너: 배열의 경우, 인덱스를 기반으로 하여 값을 저장하는 자료구조라면
//              객체의 경우은 키를 기반으로 값을 저장하는 개념 ex) 해시(hash)

// 2. 객체 자체: 속성과 기능을 가지는 최소 단위
// -> 0개 이상의 프로퍼티로 구성된 집합

//
// 객체 생성 방법 1. 객체 리터럴
//

// {프로퍼티1, 프로퍼티2, ...} -> 중괄호를 사용하여 객체를 생성하는 방식: 객체 리터럴 표기법
//      ^--- 키:밸류
const person = { name: "paul", age: 20 };
console.log(person);

// 생성된 객체의 프로퍼티에 접근하려면 점(.) 연산자를 사용하면 됩니다.
console.log(person.name);
console.log(person.age);

// 프로퍼티의 키는 문자열을 사용할 수도 있습니다.
const person1 = { "name": "daniel", "age": 30 };
console.log(person1);

// 키를 문자열로 사용하는 경우
// 1. 예약된 키워드를 사용해야 할 때
// 2. 공백이나 특수 문자를 사용해야 할 때(_와 $은 제외)
// 3. 숫자로 시작해야 할 때
const obj = {
	"yes or no": "yes",
	"\(^^)/": "haha",
	"2023_age": 0
};

// 키로 문자열을 사용한 경우, 대괄호를 사용해야 합니다.
console.log(obj["yes or no"]);
console.log(obj["2023_age"]);


// 기존 프로퍼티에 대해서도 대괄호를 사용할 수 있습니다.
// const person = { name: "paul", age: 20 };
console.log(person["name"]);
console.log(person["age"]);

// 참고! 프로퍼티에 대하여 동일한 키를 사용하여 중복으로 선언하면 오류가 발생하는
// 것이 아니라 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씁니다.
const test = { x: 1, x: 2 };
console.log(test.x);	// 2


// 참고! 프로퍼티를 동적으로 추가할 수도 있습니다.
// 존재하지 않는 키로 밸류(값)을 할당하면 오류가 발생하는 것이 아니라 프로퍼티가 동적으로
// 추가됩니다.
const o = {};
o.hello = "hello";
console.log(o);

// 문자열을 사용하여 프로퍼티를 동적으로 추가할 수 있습니다.
const key = "hello";

// ES5
const obj1 = {};
obj1[key] = "world";
console.log(obj1);

// ES6: 계산된 프로퍼티
const obj2 = { [key]: "world" };
console.log(obj2);

//
// 프로퍼티 삭제: delete 키워드와 함께 사용
//
const p1 = { name: "paul" };
console.log(p1);

delete p1.name;
console.log(p1);

// 참고! 
delete p1.age;	// 존재하지 않는 프로퍼티를 삭제하면 오류가 발생하는 것이 아니라 무시됩니다.

