
// 정적 프로퍼티와 메서드 활용
// const PI = 3.14;
// function area(radius) {
//   return PI * radius ** 2;
// }

// console.log(area(2));

// function Circle() {
//   this.PI = 3.14;
//   this.area = function(radius) { return this.PI * radius ** 2; }
// }
// const circle = new Circle();
// console.log(circle.area(2));


// function Circle() {}
// Circle.prototype.PI = 3.14;
// Circle.prototype.area = function(radius) { return this.PI * radius ** 2; }

// const circle = new Circle();
// console.log(circle.area(2));

// function Circle() {}
// Circle.PI = 3.14;
// Circle.area = function(radius) { return this.PI * radius ** 2; }

// console.log(Circle.area(2));

// 연습 문제
function TextFile(fileName) {
  if (fileName) {
    this.name = fileName + ".txt";
  }
  else {
    ++TextFile.count;      
    this.name = "noname" + TextFile.count + ".txt";
  }
}
TextFile.count = 0;
TextFile.prototype.getName = function() { return this.name; }

const t1 = new TextFile("bible");
console.log(t1.getName());  // bible.txt

const t2 = new TextFile();
console.log(t2.getName()); // noname1.txt

const t3 = new TextFile();
console.log(t3.getName()); // noname2.txt






