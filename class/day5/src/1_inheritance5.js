// super 이야기
// super: 부모의 생성자나 메서드를 호출할 수 있도록 제공되는 특수한 키워드

// super 키워드를 함수 호출 코드 형태로 사용하면 부모 클래스의 생성자가
// 호출됩니다.
// class Parent {
//   constructor() { console.log("Parent's constructor!"); }
// }

// class Child extends Parent {
//   constructor() {
//     super();
//     console.log("Child's constructor!");
//   }
// }
// const child = new Child();

// class Person {
//   constructor(name) { this.name = name; }
// }

// class Student extends Person {
//   constructor(name) {
//     super(name);  // == Person.call(this, name);
//   }
// }
// const susan = new Student("susan");
// console.log(susan.name);


// 주의할 점 1. 자식 클래스에서 constructor를 정의한 경우, 반드시 super 키워드를
// 사용하여 부모 클래스의 constructor를 호출해야 합니다.
// class Parent {}
// class Child extends Parent {
//   constructor() {} 
  
//   // 만약 자식 클래스에서 constructor를 정의하지 않는다면 다음의 코드가
//   // 암묵적으로 수행됩니다.
//   // constructor() { super(); }
// }

// const child = new Child();


// 주의할 점 2. 자식 클래스의 constructor에서 부모 클래스의 constructor를 호출하기 전에
// this를 참조하면 안됩니다. 따라서 부모 클래스의 constructor의 호출 코드는 반드시 자식 
// 클래스 constructor의 최상단에 있어야 합니다.

// class Parent {}
// class Child extends Parent {
//   constructor() {
//     // console.log("Child's constructor!");
//     console.log(this);
//     super();
//   }
// }
// const child = new Child();



// 주의할 점 3. 부모 생성자의 호출 코드(super())를 자식 클래스의 constructor가 아닌 
// 다른 콧에서 사용하면 오류가 발생합니다.
class Parent {}
class Child extends Parent {
  foo() { super(); }
}

const child = new Child();
child.foo();



















