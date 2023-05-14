
// 생성자 함수 
// function Person(name) {
// 	this.name = name;
// 	this.getName = function() { return this.name; }
// }

// 생성자 함수 호출 시, new 연산자를 사용하지 않으면 일반 함수로 호출되어
// undefined로 설정됩니다.
// const person = Person("paul");
// console.log(person);	// undefined

// 생성자 함수를 new 연산자를 사용하여 호출하지 않으면 생성자 함수의 this는 다음과
// 같이 해석됩니다.
// Browser: window 객체
// Node.js: global 객체
// console.log(global.name);	// paul


// 스코프 세이프 생성자 패턴(Scope-Safe Constructor Pattern)
// ES5
// function Circle(radius) {
// 	// new 연산자를 사용하여 호출하는 경우: const this = {}
// 	// new 연산자를 사용하지 않고 호출하는 경우: this는 전역 객체를 참조하게 됩니다.
// 	if (!(this instanceof Circle)) {	// new 연산자를 사용하지 않은 경우
// 		return new Circle(radius);
// 	}
// 	this.radius = radius;
// 	this.getArea = function() { return 3.14 * this.radius ** 2; };
// }

// const c = new Circle(2);
// console.log(c.getArea());

// const c1 = Circle(2);
// console.log(c1.getArea());

// ES6
function Circle(radius) {
	// new 연산자를 사용하지 않고 생성자 함수를 호출하는 경우, target은 false로 설정됩니다.
	if (!new.target) {	
		return new Circle(radius);
	}
	this.radius = radius;
	this.getArea = function() { return 3.14 * this.radius ** 2; };
}

const c = new Circle(2);
console.log(c.getArea());

const c1 = Circle(2);
console.log(c1.getArea());
