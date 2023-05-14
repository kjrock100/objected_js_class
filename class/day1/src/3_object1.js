
// 객체의 프로퍼티에는 함수를 대입할 수 있습니다.
// ES5
const p1 = {
	name: "daniel",
	getName: function() { return this.name; }
};
console.log(p1.getName());

// ES6: 메서드 축약 표현
const p2 = {
	name: "susan",
	getName() { return this.name; }
};
console.log(p2.getName());

// 참고! 기존 변수를 사용하여 프로퍼티 추가 시, 변수명만 사용하면 자동으로
// 키와 밸류가 설정됩니다.
const x = 1, y = 2;

// ES5
const o1 = { x: x, y: y };
console.log(o1);

// ES6
const o2 = { x, y };
console.log(o2);

//
// 객체
//

// object: 물건, 물체, 사물

// 현실 세계의 물체나 사물은 크게 2가지의 개념으로 추상화할 수 있습니다.
// 1. 속성, 상태
// 2. 기능, 동작

// ex) 볼펜
// 속성이나 상태: 색깔, 제조자, 굵기, ...         -> 프로퍼티
// 기능이나 동작: 글자를 쓰다, 그림을 그리다, ... -> 메서드(함수)

// 프로그래밍 언어에서 객체: 속성과 기능 또는 상태와 동작을 가지는 최소 단위
