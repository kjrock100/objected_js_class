
// super 키워드를 사용하면 부모의 프로토타입 메서드를 호출할 수 있습니다.
// class Parent {
//   method() { console.log("Parent's method()"); }
// }

// class Child extends Parent {
//   // method overriding
//   method() { 
//     super.method();  // Parent.prototype.method.call(this);
//     console.log("Child's method()");
//   }
// }

// const child = new Child();
// child.method();


// 스태틱 메서드 안에서도 super 키워드를 호출할 수 있습니다.
class Parent {
  static staticMethod() { console.log("Parent's staticMethod()"); }
}

class Child extends Parent {
  static staticMethod() {
    super.staticMethod();  // == Parent.staticMethod.call(this);
    console.log("Child's staticMethod()");
  }
}
Child.staticMethod();











