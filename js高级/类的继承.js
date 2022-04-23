class Fq {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  sum() {
    console.log(this.x + this.y);
  }
}
class Ez extends Fq{
  constructor(x,y){
    super(x,y);     //调用了父类的构造函数
  }
}
// var a = new Fq(1, 2);
var b = new Ez(3, 4);
// console.log(a);
b.sum();