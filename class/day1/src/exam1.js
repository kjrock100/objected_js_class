// function total(s) { return s.kor + s.eng + s.math; }
// function average(s) { return (s.kor + s.eng + s.math) / s.cnt; }

// const paul = { name: "paul", kor: 10, eng: 20, math: 30, cnt: 3 };
// let tot1 = total(paul);
// let avg1 = average(paul);
// console.log(paul.name, tot1, avg1);

// const susan = { name: "susan", kor: 20, eng: 30, math: 40, cnt: 3 };
// let tot2 = total(susan);
// let avg2 = average(paul);	// ??
// console.log(susan.name, tot2, avg2);

// 이전의 코드는 총점과 평균 계산 시, 올바르게 계산되지 않는다는 치명적인 문제가 있습니다.
// 이와 같은 문제가 발생하는 이유는 데이터와 데이터를 처리하는 함수가 이원화되어 있기 
// 때문입니다. 이르 해결하기 위해 데이터와 데이터를 처리하는 함수를 하나로 묶어 처리하도록
// 합니다.
const paul = {
	name: "paul",
	kor: 10,
	eng: 20,
	math: 30,
	cnt: 3,
	total() { return this.kor + this.eng + this.math; },
	average() { return (this.kor + this.eng + this.math) / this.cnt; }
};
let tot1 = paul.total();	// total(paul);
let avg1 = paul.average();	// average(paul);
console.log(paul.name, tot1, avg1);

const susan = {
	name: "susan",
	kor: 20,
	eng: 30, 
	math: 40,
	cnt: 3,
	total() { return this.kor + this.eng + this.math; },
	average() { return (this.kor + this.eng + this.math) / this.cnt; }
};
let tot2 = susan.total();
let avg2 = susan.average();	
console.log(susan.name, tot2, avg2);