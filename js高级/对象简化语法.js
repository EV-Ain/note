const a = {
  name: "zhangsan",
};
const b = function str() {
  console.log("测试");
};
let c = {
  a,b,hanshu(){
    console.log(666);
  }
};
console.log(c);
