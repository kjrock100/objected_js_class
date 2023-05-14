// function total(a, b, c) { return a + b + c; }
// function average(tot, cnt) { return tot / cnt; }

// let name1 = "paul";
// let kor1 = 10;
// let eng1 = 20;
// let math1 = 30;
// let tot1 = total(kor1, eng1, math1); // kor1 + eng1 + math1;
// let avg1 = average(tot1, 3);         // tot1 / 3;
// console.log(name1, tot1, avg1);

// let name2 = "susan";
// let kor2 = 20;
// let eng2 = 30;
// let math2 = 40;
// let tot2 = total(kor1, eng2, math2);	// ??
// let avg2 = average(tot2, 3);
// console.log(name2, tot2, avg2);

// student1 = {name : "paul", kor: 10, eng:20, math:30};
// student2 = {name : "susan", kor: 20, eng:30, math:40};

// student1.total = total(student1.kor, student1.eng, student1.math);
// student1.avg = average(student1.kor, student1.eng, student1.math);

// student2.total = total(student2.kor, student2.eng, student2.math);
// student2.avg = average(student2.kor, student2.eng, student2.math);

// console.log(student1.name, student1.total, student1.avg);
// console.log(student2.name, student2.total, student2.avg);

/////////////////////////////
function total() { return this.kor + this.eng + this.math; }
function average() { return (this.kor + this.eng + this.math) / this.cnt; }

const paul = { name: "paul", kor: 10, eng: 20, math: 30, cnt: 3 };
console.log(paul.name, total.apply(paul), average.apply(paul));

const susan = { name: "susan", kor: 20, eng: 30, math: 40, cnt: 3 };
console.log(susan.name, total.apply(susan), average.apply(susan));