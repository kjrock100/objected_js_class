
// 최상위 객체, Object
const obj = {};
console.log(obj.valueOf());

// 자바스크립트의 모든 객체에는 공통의 부모가 존재하는데
// 바로 Object(엄밀하게 이야기하면 Object.prototype) 객체이다.

// 자바스크립트 엔진은 객체를 생성할 때, 모든 객체가 Object(.prototype)를 암묵적으로
// 상속받도록 구현되어 있습니다.
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);