//构造函数首字母必须大写
//构造函数不需要return就可以返回结果
//属性方法必须加上this
function Star(uname, age, sex) {
  this.name = uname;
  this.age = age;
  this.sex = sex;
}
var ldh = new Star("刘德华", 18, "男");
// console.log(ldh.name);
// console.log(ldh['name']);
function Wz(name, type, boold, attack) {
  this.mz = name;
  this.sz = type;
  this.xl = boold;
  this.gj = attack;
}
var lp = new Wz("廉颇", "力量型", "500", "近战");
console.log(lp.mz);

//new 关键词的执行过程
//1. new构造函数会在内存中创建一个空对象
//2.this就会指向刚才创造的空对象
//3.执行构造函数里面的代码 给这个空对象添加属性和方法
//4.返回这个对象