
// 3. Function 생성자 함수
const add = new Function("x", "y", "return x + y;");
console.log(add(1,1));

// 4. 화살표 함수(ES6)
// function sub(x, y) {
// 	return x - y;
// }
const sub = (x, y) => x - y;
console.log(sub(1,1));