const fs = require("fs");
//回调函数形式
// fs.readFile('./测试.txt',(err,data)=>{
//   if(err) throw err
//   console.log(data.toString());
// })
//promise模式
let p = new Promise((resolve, reject) => {
  fs.readFile("./测试.txt", (err, data) => {
    //如果错误
    if (err) reject(err);
    //如果成功
    resolve(data);
  });
});
console.log(p);
p.then(
  //值
  (value) => {
    console.log(value.toString());
  },
  //错误
  (reason) => {
    console.log(reason);
  }
);
