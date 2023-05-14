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

const rect = new Rectangle(1, 1, 10, 10);
rect.draw();

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
    RoundRectangle.prototype.draw = function () { console.log("둥근 사각형을 그립니다.", this.x, this.y, this.w, this.h, this.rX, this.rY); };
    return RoundRectangle;
})();

const rrect = new RoundRectangle(1, 1, 10, 10, 5, 5);
rrect.draw();
