
// apply, call, bind

// Function.prototype.call/apply/bind

// function getThis() {
//   return this;
// }
// console.log(getThis());  // this -> global

// const thisArgs = { name: "susan" };
// console.log(getThis.call(thisArgs));  // this -> thisArgs



// 1. Function.prototype.apply(obj[, argsArray])
//       obj: this와 바인딩할 객체
// argsArray: 함수에게 전달할 인수 리스트의 배열 또는 유사 배열 객체
// function getThis() {
//   console.log(arguments);
//   return this;
// }
// const thisArgs = { name: "susan" };
// getThis.apply(thisArgs, [1,2,3]);  // getThis(1,2,3)

// 2. Function.prototype.call(obj, [, [arg1[, arg2[, ...]]])
//             obj: this와 바인딩할 객체
// arg1, arg2, ...: 함수에게 전달할 인자
// function getThis() {
//   console.log(arguments);
//   return this;
// }
// const thisArgs = { name: "susan" };
// getThis.call(thisArgs, 1,2,3);  // getThis(1,2,3)


// 3. Function.prototype.bind(obj)
// -> 인자로 전달된 객체로 바인딩 된 새로운 함수를 반환합니다.


function getThis() {
  return this;
}
const thisArgs = { name: "susan" };
const getThis2 = getThis.bind(thisArgs);
console.log(getThis2());



