// 2. 프로토타입 메서드
// 클래스 내에 메서드 축약 방식을 사용하여 메서드를 추가하면 프로토타입 메서드로
// 추가됩니다.

class Person {
  constructor(name) { this.name = name; }
  sayHi() {  console.log(`Hi, I'm ${this.name}!`); }
}

const susan = new Person("susan");
susan.sayHi();

// 클래스 내에 정의된 메서드의 특징
// 1. function 키워드를 사용할 필요도 없고 사용할 수도 없습니다. -> 메서드 축약 방식을 사용
// 2. 객체 리터럴과 다르게 다수의 메서드 정의 시, 쉼표(,)를 사용할 필요가 없습니다. 
// 3. 메서드는 암묵적으로 strict mode로 실행됩니다.
// 4. 해당 메서드는 [[Construct]] 내부 메서드가 없으므로 non-constructor입니다. 따라서
//    new  연산자와 함께 호출될 수 없습니다.