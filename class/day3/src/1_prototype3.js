
// 오버라이딩(overriding) 이야기

// 파워포인트와 같은 도형 편집기를 생각해 봅니다.
// const Rectangle = (function() {
//   function Rectangle(x, y, w, h) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//   }
//   Rectangle.prototype.draw = function() { console.log("사각형을 그립니다."); }
//   return Rectangle;
// })();

// const rect = new Rectangle(1,1,10,10);
// rect.draw();

// const RoundRectangle = (function() {
//   function RoundRectangle(x, y, w, h, rX, rY) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//     this.rX = rX;
//     this.rY = rY;
//   }
//   RoundRectangle.prototype.draw = function() { console.log("둥근 사각형을 그립니다."); };
//   return RoundRectangle;
// })();

// const rrect = new RoundRectangle(1,1,10,10,5,5);
// rrect.draw();



// 상속을 사용한 코드로 변경합니다.
// const Rectangle = (function() {
//   function Rectangle(x, y, w, h) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//   }
//   Rectangle.prototype.draw = function() { console.log("사각형을 그립니다."); }
//   return Rectangle;
// })();

// const RoundRectangle = (function() {
//   function RoundRectangle(x, y, w, h, rX, rY) {
//     Rectangle.call(this, x, y, w, h);
//     this.rX = rX;
//     this.rY = rY;
    
//     // 아래의 코드와 같이 부모 객체의 기능을 자식이 재정의 하는 것을 오버라이딩이라과
//     // 합니다.
//     this.draw = function() { console.log("둥근 사각형을 그립니다."); };
//   }
//   RoundRectangle.prototype = Object.create(Rectangle.prototype);
//   RoundRectangle.prototype.constructor = RoundRectangle;
  
//   return RoundRectangle;
// })();

// const rrect = new RoundRectangle(1,1,10,10,5,5);
// rrect.draw();


const Rectangle = (function() {
  function Rectangle(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Rectangle.prototype.draw = function() { console.log("사각형을 그립니다."); }
  return Rectangle;
})();

const RoundRectangle = (function() {
  function RoundRectangle(x, y, w, h, rX, rY) {
    Rectangle.call(this, x, y, w, h);
    this.rX = rX;
    this.rY = rY;
    this.draw = function() {
      // 오버라이딩된 메서드에 안에서 부모의 메서드를 호출하는 방법은 다음과 같습니다.
      RoundRectangle.prototype.draw.call(this);
      console.log("네 모서리를 둥글게 깎습니다.");
    };
  }
  RoundRectangle.prototype = Object.create(Rectangle.prototype);
  RoundRectangle.prototype.constructor = RoundRectangle;
  
  return RoundRectangle;
})();

const rrect = new RoundRectangle(1,1,10,10,5,5);
rrect.draw();