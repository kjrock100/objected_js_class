// const paul = {
// 	name: "paul",
// 	kor: 10,
// 	eng: 20,
// 	math: 30,
// 	cnt: 3,
// 	total() { return this.kor + this.eng + this.math; },
// 	average() { return (this.kor + this.eng + this.math) / this.cnt; }
// };
// let tot1 = paul.total();
// let avg1 = paul.average();
// console.log(paul.name, tot1, avg1);

// const susan = {
// 	name: "susan",
// 	kor: 20,
// 	eng: 30, 
// 	math: 40,
// 	cnt: 3,
// 	total() { return this.kor + this.eng + this.math; },
// 	average() { return (this.kor + this.eng + this.math) / this.cnt; }
// };
// let tot2 = susan.total();
// let avg2 = susan.average();	
// console.log(susan.name, tot2, avg2);



function Student (name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
    this.cnt = 3;
    this.total = function () { return this.kor + this.eng + this.math;};
    this.average = function () { return (this.kor + this.eng + this.math) / this.cnt; };
    this.print = function () { console.log(this.name, this.total(), this.average()); };
}

let paul = new Student("paul", 10, 20, 30);
paul.print();

let susan = new Student("susan", 20, 30, 40);
susan.print();