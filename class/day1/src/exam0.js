// 학생의 점수를 관리하는 학사 관리 프로그램을 생각해 봅니다.
// let name = "paul";
// let kor = 10;
// let eng = 20;
// let math = 30;

// let tot = kor + eng + math;
// let avg = tot / 3;

// console.log(name, tot, avg);

// 학생 1명이 추가되었다고 가정합니다.
// let name = "paul";
// let kor = 10;
// let eng = 20;
// let math = 30;
// let tot = kor + eng + math;
// let avg = tot / 3;
// console.log(name, tot, avg);

// name = "susan";
// kor = 20;
// eng = 30;
// math = 40;
// tot = kor + eng + math;
// avg = tot / 3;
// console.log(name, tot, avg);


// 이전의 코드는 변수의 재사용으로 인해 기존 학생 정보가 소실된다는 문제가 있습니다.
// 이를 해결하기 위해 각 학생마다 새로운 변수를 사용하도록 합니다.
// let name1 = "paul";
// let kor1 = 10;
// let eng1 = 20;
// let math1 = 30;
// let tot1 = kor1 + eng1 + math1;
// let avg1 = tot1 / 3;
// console.log(name1, tot1, avg1);

// let name2 = "susan";
// let kor2 = 20;
// let eng2 = 30;
// let math2 = 40;
// let tot2 = kor2 + eng2 + math2;
// let avg2 = tot2 / 3;
// console.log(name2, tot2, avg2);

// 이전의 코드는 총점과 평균을 계산하는 코드가 반복되고 있습니다. 즉, 코드의 중복이
// 발생하고 있습니다. 코드의 중복이 발생하게 되면 유지 보수가 어려워지며 논리적 오류(버그)가
// 발생할 가능성이 높아집니다. 또한 수식이 그대로 노출되어 있어 가독성도 떨어집니다.
// 이를 해결하기 위해 함수를 도입하도록 합니다.
// function total(a, b, c) { return a + b + c; }
// function average(tot, cnt) { return tot / cnt; }

// let name1 = "paul";
// let kor1 = 10;
// let eng1 = 20;
// let math1 = 30;
// let tot1 = total(kor1, eng1, math1); // kor1 + eng1 + math1;
// let avg1 = average(tot1, 3);         // tot1 / 3;
// console.log(name1, tot1, avg1);

// let name2 = "susan";
// let kor2 = 20;
// let eng2 = 30;
// let math2 = 40;
// let tot2 = total(kor1, eng2, math2);	// ??
// let avg2 = average(tot2, 3);
// console.log(name2, tot2, avg2);

// 이전의 코드는 치명적인 오류가 존재하는데 총점을 계산할 때, 다른 학생의 점수가
// 혼용된다는 것입니다. 이와 같은 문제가 발생하는 이유는 서로 밀접하게 관련 있는
// 데이터를 개별적으로 취급하고 있기 때문입니다. 이를 해결하기 위해 관련 있는 데이터를
// 하나로 묶어서 처리하도록 합니다.
function total(s) { return s.kor + s.eng + s.math; }
function average(s) { return (s.kor + s.eng + s.math) / s.cnt; }

const paul = { name: "paul", kor: 10, eng: 20, math: 30, cnt: 3 };
let tot1 = total(paul);		// total(kor1, eng1, math1);
let avg1 = average(paul); 	// average(tot1, 3);
console.log(paul.name, tot1, avg1);

const susan = { name: "susan", kor: 20, eng: 30, math: 40, cnt: 3 };
let tot2 = total(susan);
let avg2 = average(susan);
console.log(susan.name, tot2, avg2);



