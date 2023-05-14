// function Student(name, kor, eng, math) {
// 	if (!new.target) { return new Student(name, kor, eng, math); }
// 	this.name = name;
// 	this.kor = kor;
// 	this.eng = eng;
// 	this.math = math;
// 	this.cnt = 3;
// }
// Student.prototype.total = function() { return this.kor + this.eng + this.math; },
// Student.prototype.average = function() { return (this.kor + this.eng + this.math) / this.cnt; }

// const paul = Student("paul", 10, 20, 30);
// console.log(paul.name, paul.total(), paul.average());

// const susan = Student("susan", 20, 30, 40);
// console.log(susan.name, susan.total(), susan.average());

// 현재 코드를 클래스 코드로 변경해 보세요.

class Student {
    cnt = 3;
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    total() { return this.kor + this.eng + this.math; }
    average() { return (this.kor + this.eng + this.math) / this.cnt; }
}

const paul = new Student("paul", 10, 20, 30);
console.log(paul.name, paul.total(), paul.average());

const susan = new Student("susan", 20, 30, 40);
console.log(susan.name, susan.total(), susan.average());


class Student2 {
    static cnt = 3;
    static name;
    static kor;
    static eng;
    static math;
    static update(name, kor, eng, math) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    static total() { return this.kor + this.eng + this.math; }
    static average() { return (this.kor + this.eng + this.math) / this.cnt; }
}

Student2.update("paul", 10, 20, 30);
console.log("static >", Student2.name, Student2.total(), Student2.average());

Student2.update("susan", 20, 30, 40);
console.log("static >", Student2.name, Student2.total(), Student2.average());