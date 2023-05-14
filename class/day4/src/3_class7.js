// 스태틱(정적) 필드

// 스태틱 필드의 종류
// 1. static public
// 2. static private

// class Circle {
//   // 정적 프로퍼티를 사용하려면 클래스 필드로 정의하셔야 합니다.
//   static pi = 3.14;  // public
//   static #cnt = 0;   // private
// }

// console.log(Circle.pi);
// console.log(Circle.#cnt);



// 스태틱 필드(정적 프로퍼티)는 클래스의 이름 또는 스태틱 메서드에서만
// 참조할 수 있습니다. 
class Circle {
  static pi = 3.14; 
  
  foo() { console.log(this.pi); }
  static goo() { console.log(this.pi); }
}

const circle = new Circle();
circle.foo();

Circle.goo();  // 3.14







