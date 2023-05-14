
// 싱글톤 패턴(sigleton pattern): 유일한 객체를 만드는 방법

// function Cursor() {}
// const c1 = new Cursor();
// const c2 = new Cursor();
// console.log(c1 === c2);

// 방법 1. 전역 객체
// function Cursor() {
//   if (!global.cursor) {    // 커서가 존재하지 않는다면
//     global.cursor = this;  // 캐싱
//   }
//   return global.cursor;
// }
// const c1 = new Cursor();
// const c2 = new Cursor();
// console.log(c1 === c2);

// 방법 2. 스태틱(정적) 프로퍼티의 사용
// function Cursor() {
//   if (!Cursor.cursor) {    // 커서가 존재하지 않는다면
//     Cursor.cursor = this;  // 캐싱
//   }
//   return Cursor.cursor;
// }
// const c1 = new Cursor();
// const c2 = new Cursor();
// console.log(c1 === c2);

// 방법 3. 클로저의 사용
// const Cursor = (function(){
//   function Cursor() {}
  
//   let instance;
//   return {
//     getInstance() {
//       if (!instance) { instance = new Cursor(); }
//       return instance;
//     }
//   };
// })();

// const c1 = Cursor.getInstance();
// const c2 = Cursor.getInstance();

// console.log(c1 === c2);


// 방법 4. 클래스 사용
class Cursor {
  static #instance;  // 정보 은닉
  constructor() {
    if (!Cursor.#instance) {
      Cursor.#instance = this;
    }
    return Cursor.#instance;
  }
}

const c1 = new Cursor();
const c2 = new Cursor();

console.log(c1 === c2);













