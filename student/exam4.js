function Student(name, kor, eng, math) {
	if (!new.target) { return new Student(name, kor, eng, math); }
	this.name = name;
	this.kor = kor;
	this.eng = eng;
	this.math = math;
	this.cnt = 3;
}
Student.prototype.total = function() { return this.kor + this.eng + this.math; };
Student.prototype.average = function() { return (this.kor + this.eng + this.math) / this.cnt; };

const paul = new Student("paul", 10, 20, 30);
console.log(paul.name, paul.total(), paul.average());

const susan = new Student("susan", 20, 30, 40);
console.log(susan.name, susan.total(), susan.average());