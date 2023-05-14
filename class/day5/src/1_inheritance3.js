
// 동적 상속: 조건에 따라 동적으로 상속 대상을 결정
function Parent1() {}
Parent1.prototype.method = function() { console.log("Parent1's method!"); }

class Parent2 {
  method() { console.log("Parent2's method!"); }
}

let condition = false;
class Child extends (condition? Parent1 : Parent2) {}

const child = new Child();
child.method();