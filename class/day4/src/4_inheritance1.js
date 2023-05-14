// 클래스와 상속 이야기

// // 부모 클래스
// class Parent {}

// // 어떤 클래스를 상속하려면 extends 키워드를 사용하시면 됩니다.
// class Child extends Parent {}  // 자식 클래스

// class Person {
//   // prototype method
//   eat() { console.log("eat..."); }
//   sleep() { console.log("sleep..."); }
// };

// class Student extends Person {
//   study() { console.log("study..."); }
// }
// const student = new Student();
// student.eat();
// student.sleep();
// student.study();

// 클래스에서 extends를 사용하여 상속을 구현하면 클래스에 대한 프로토타입 체인이
// 생성되므로 스태틱 프로퍼티와 메서드도 상속 가능합니다.
class Parent {
  static staticProperty = "static property";
  static staticMethod() { console.log("static method"); }
}
class Child extends Parent {}

console.log(Parent.staticProperty);
Parent.staticMethod();

console.log(Child.staticProperty);
Child.staticMethod();








