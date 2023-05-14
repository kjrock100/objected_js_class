
// this 바인딩
// 함수가 어떻게 호출되었는지에 따라 동적으로 결정

// 함수가 호출되는 방식
// 1. 일반 함수 호출
// 2. 메서드 호출
// 3. 생성자 호출
// 4. call/apply/bind 메서드에 의한 간접 호출

// const f = function() { console.log(this); }

// // 1. 일반 함수 호출: this 전역 객체를 참조
// f();  // window or global

// // 2. 메서드 호출: 함수를 호출한 객체를 참조
// const obj = { f };
// obj.f();

// // 3. 생성자 함수 호출: 생성자 함수가 생성한 인스턴스(객체)를 참조
// new f();

// // 4. 간접 호출
// const daniel = { name: "daniel" };
// f.call(daniel);


//
// 1. 일반 함수로써 호출
// 
// function foo() {
//   console.log("foo:", this);  // global
  
//   // 중첩 함수라고 하더라도 일반 함수로 호출되면 이 역시 전역 객체를 참조합니다.
//   function bar() { console.log("bar:", this); }  // global
//   bar();
// }
// foo();

// 참고! 함수에 대하여 일반 함수로 호출하면 this는 전역 객체에 바인딩되지만
// struct mode에서 호출하면 undefined가 반환됩니다.

// global.value = "global";
// const obj = {
//   value: "obj.value",
//   foo() {
//     console.log(this.value);  // this == obj
    
//     function bar() { console.log(this.value); }  // this == global
//     bar();
//   } 
// };
// obj.foo();

// global.value = "global";
// function invoke(callback) {
//   // 아래의 콜백도 일반 함수로 호출되므로 this는 전역 객체에 바인딩됩니다.
//   callback();  
// }
// invoke(function() { console.log(this.value); });

global.value = "global";
const obj = {
  value: "obj.value",
  foo() {
    // const that = this;
    // function bar() { console.log(that.value); }
    // bar();
    
    function bar() { console.log(this.value); }
    bar.call(this);
  },
  goo() {
    // 화살표 함수의 this는 상위 스코프에 바인딩됩니다.
    const f = () => { console.log(this.value); } 
    f();
  }
};
obj.foo();
obj.goo();















