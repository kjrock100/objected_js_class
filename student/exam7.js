
// 오버라이딩(overriding) 이야기

// 파워포인트와 같은 도형 편집기를 생각해 봅니다.
const Rectangle = (function () {
  function Rectangle(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Rectangle.prototype.draw = function () { console.log("사각형을 그립니다.", this.x, this.y, this.w, this.h); }
  return Rectangle;
})();

const RoundRectangle = (function () {
  function RoundRectangle(x, y, w, h, rX, rY) {
    //   this.x = x;
    //   this.y = y;
    //   this.w = w;
    //   this.h = h;
    Rectangle.call(this, x, y, w, h);
    this.rX = rX;
    this.rY = rY;
  }

  RoundRectangle.prototype = Object.create(Rectangle.prototype);
  RoundRectangle.prototype.constructor = RoundRectangle;
  RoundRectangle.prototype.draw = function () { 
    RoundRectangle.prototype.__proto__.draw.call(this);
    console.log("추가, 둥근 사각형으로 그립니다.", this.x, this.y, this.w, this.h, this.rX, this.rY);
   };
  return RoundRectangle;
})();

// const rect = new Rectangle(1, 1, 10, 10);
// rect.draw();

const rrect = new RoundRectangle(1, 1, 10, 10, 5, 5);
rrect.draw();

console.log(rrect.__proto__, rrect.__proto__ instanceof Rectangle);
console.log(rrect.__proto__.__proto__);


