
// 생성자 함수에서의 this

function Circle(radius) {
  // 생성자 함수로 호출되었을 때의 this는 생성자 함수에 의해 생성된 
  // 인스턴스로 바인딩됩니다.
  this.radius = radius;
}

const c1 = new Circle(2);
console.log(c1.radius);

const c2 = new Circle(3);
console.log(c2.radius);

console.log(global.radius);
Circle(10);  // this -> global
console.log(global.radius);

