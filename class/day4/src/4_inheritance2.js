
// extends는 생성자 함수도 상속할 수 있습니다.
// [[Construct]] 내부 메서드를 갖는 객체는 모두 상속할 수 있습니다.
//       ^---- ex) 생성자 함수, 클래스

function Parent() {}
Parent.prototype.instanceMethod = function() { console.log("instance method"); }
Parent.staticMethod = function() { console.log("static method"); }

class Child extends Parent {}

const child = new Child();
child.instanceMethod();
Child.staticMethod();