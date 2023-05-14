// function Student(name, kor, eng, math) {
// 	if (!new.target) { return new Student(name, kor, eng, math); }
// 	this.name = name;
// 	this.kor = kor;
// 	this.eng = eng;
// 	this.math = math;
// 	this.cnt = 3;
// 	this.total = function() { return this.kor + this.eng + this.math; },
// 	this.average = function() { return (this.kor + this.eng + this.math) / this.cnt; }
// }
// const paul = Student("paul", 10, 20, 30);
// console.log(paul.name, paul.total(), paul.average());

// const susan = Student("susan", 20, 30, 40);
// console.log(susan.name, susan.total(), susan.average());

// 위 코드의 단점은 모든 객체가 함수를 중복으로 소유하고 있다는 것입니다.
// 이를 해결하기 위해 프로토타입을 사용하도록 합니다.

function Student(name, kor, eng, math) {
	if (!new.target) { return new Student(name, kor, eng, math); }
	this.name = name;
	this.kor = kor;
	this.eng = eng;
	this.math = math;
	this.cnt = 3;
}
Student.prototype.total = function() { return this.kor + this.eng + this.math; },
Student.prototype.average = function() { return (this.kor + this.eng + this.math) / this.cnt; }

const paul = Student("paul", 10, 20, 30);
console.log(paul.name, paul.total(), paul.average());

const susan = Student("susan", 20, 30, 40);
console.log(susan.name, susan.total(), susan.average());
