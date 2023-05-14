// 프로퍼티의 종류
// 1. 데이터 프로퍼티: 값을 가지고 있는 프로퍼티
// 2. 접근자 프로퍼티: 값을 가지지 않는 프로퍼티
//                     값을 가지지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장하는데
//                     사용되는 프로퍼티로 접근자 함수로 구성되어 있음

// const person = {
// 	firstName: "paul",
// 	lastName: "kim"
// };

// // full name을 출력
// console.log(`${person.firstName} ${person.lastName}`);


// const person = {
// 	firstName: "paul",
// 	lastName: "kim",
// 	getFullName() { return `${this.firstName} ${this.lastName}`; },
	
// 	// 접근자 함수
// 	get fullName() { return `${this.firstName} ${this.lastName}`; }
// };

// // full name을 출력
// console.log(`${person.firstName} ${person.lastName}`);
// console.log(person.getFullName());
// console.log(person.fullName);



// const person = {
// 	firstName: "paul",
// 	lastName: "kim",
	
// 	// 접근자 함수
// 	get fullName() { return `${this.firstName} ${this.lastName}`; },
// 	set fullName(name) { [this.firstName, this.lastName] = name.split(" "); }
// };

// console.log(person.fullName);		// -> person.fullName();
// person.fullName = "daniel kang";	// -> person.fullname("daniel kang");
// console.log(person.fullName);

// 생성자 함수
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	
	// 접근자 프로퍼티 정의
	Object.defineProperty(this,			// 프로퍼티를 추가할 객체
						  "fullName", 	// 접근자 프로퍼티의 이름
						  {
		get: function() { return this.firstName + " " + this.lastName; },
		set: function(name) {[this.firstName, this.lastName] = name.split(" "); }
	});
}
const paul = new Person("paul", "kim");
console.log(paul.fullName);

paul.fullName = "daniel kang"
console.log(paul.fullName);















