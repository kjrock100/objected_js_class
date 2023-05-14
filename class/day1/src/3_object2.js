
// 사람의 이름을 저장하는 객체를 생각해 봅니다.
// const paul = {
// 	name: "paul",
// 	getName() { return this.name;}
// };
// console.log(paul.getName());

// const susan = {
// 	name: "susan",
// 	getName() { return this.name;}
// };
// console.log(susan.getName());

// const daniel = {
// 	name: "daniel",
// 	getName() { return this.name;}
// };
// console.log(daniel.getName());

// 이전의 코드는 동일 프로퍼티와 메서드를 갖는 객체를 생성하는데 매우 비효율적이라는
// 단점이 있습니다. 이를 해결하기 위해 동일 프로퍼티와 메서드를 갖는 함수를 도입하도록 합니다.
// function createPerson(name) {
// 	const object = {}
// 	// -----------------------------------------------
// 	object.name = name;
// 	object.getName = function() { return this.name; };
// 	// -----------------------------------------------
// 	return object;
// }

// const paul = createPerson("paul");
// console.log(paul.getName());

// const susan = createPerson("susan");
// console.log(susan.getName());

// const daniel = createPerson("daniel");
// console.log(daniel.getName());

// 이전의 코드의 객체를 생성하는 함수는 객체를 생성하는 코드와 이를 반환하는 코드를
// 사용자가 매번 구현해야 한다는 단점이 있습니다. 이를 해결하기 위해 자바스크립트에서는
// 이를 자동으로 처리해주는 함수를 제공하는데 이를 생성자 함수라고 합니다.

// 일반 함수와 생성자 함수를 구분하기 위해 관례적으로 함수명은 파스칼 케이스를 사용합니다.
function Person(name) {
	// const this = {}
	this.name = name;
	this.getName = function() { return this.name; };
	// return this;
}

// 생성자 함수를 사용하여 객체를 생성할 때는 반드시 new 연산자와 함께 사용해야 합니다.
const paul = new Person("paul");
console.log(paul.getName());

const susan = new Person("susan");
console.log(susan.getName());

const daniel = new Person("daniel");
console.log(daniel.getName());
