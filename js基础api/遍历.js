var obj = {
  name: "张三",
  age: "18",
  sex: "男",
};
for (var k in obj) {
  console.log(k); //输出 name age sex
  console.log(obj[k]); //输出张三 18 男
}
