
// 스코프 이야기

// 스코프(scope): 식별자(어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름)와
// 이것이 참조되고 사용도리 수 있는 영역을 정의하는 개념
// -> 다른 코드에 의해 식별자를 참조할 수 있는 유효 범위

// 스코프의 종류
// 1. 전역 스코프(global scope)
// - 코드 가장 바깥 영역으로 코드 어디에서나 참조 가능

// 2. 지역 스코프 또는 함수 레벨 스코프(local scope or Function-level scope)
// - 함수 내부 영역으로 함수 자신과 하위 함수에서만 참조 가능

// 3. 블록 레벨 스코프(block-level scope)
// - 중괄호 내부 영역으로 제어문의 블록을 의미하며 함수는 해당되지 않음


// 전역 스코프 
var gValue = "gValue";  // 전역 변수
console.log(gValue);  // OK

(function() {
  // 지역 스코프
  console.log(gValue);  // OK
  
  var lValue = "lValue";
  console.log(lValue);  // 지역 변수
  
  (function() { console.log(lValue); })();
  
})();
// console.log(lValue);

if (true) {
  // 블록 레벨 스코프  
  console.log(gValue);  // OK
}


