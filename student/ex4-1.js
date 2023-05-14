
// 클래스 필드 이야기
class Person {
    #name = "no name";  // 인스턴스 프로퍼티
    constructor(name) {
        if (name)
         this.#name = name;
    }
    get myName() { return this.#name;}
    set myName(n) { this.#name = n;}
  }
  
  const susan = new Person("susan");
  console.log(susan.myName);

  const susan2 = new Person();
  susan2.myName = 'aaa';
  console.log(susan2.myName);
