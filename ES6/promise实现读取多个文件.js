const fs = require("fs");
let p = new Promise((resolve, reject) => {
  fs.readFile("./测试.txt", (err, data) => {
    resolve(data);
  });
});

p.then((value) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./测试2.txt", (err, data) => {
       resolve ([value,data])
       console.log([value,data].toString());
    });
  });
}).then((value)=>{
  return new Promise((resolve, reject) => {
    fs.readFile("./测试3.txt", (err, data) => {
      //  压入
      value.push(data)
      resolve (value)
    });
  });
}).then((value)=>{
  console.log(value.toString());
})
