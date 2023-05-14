// 이전의 코드(exam2.js) 생성자 함수를 new 연산자와 함께 호출하지 않은 경우, 오류가 발생한다는
// 문제가 있습니다. 이를 해결하기 위해 스코프 세이프 생성자 패턴을 사용하도록 합니다.
function Student(name, kor, eng, math) {
	if (!new.target) {
		return new Student(name, kor, eng, math);
	}
	this.name = name;
	this.kor = kor;
	this.eng = eng;
	this.math = math;
	this.cnt = 3;
	
	this.total = function() { return this.kor + this.eng + this.math; },
	this.average = function() { return (this.kor + this.eng + this.math) / this.cnt; }
}

const paul = Student("paul", 10, 20, 30);
let tot1 = paul.total();
let avg1 = paul.average();
console.log(paul.name, tot1, avg1);

