const a={
  name:"zhangsan",
  age:18,
  fangfa:function(){
    console.log("我是一个方法")
  }
}
// let {name,age,fangfa}=a

//如果想调用函数fangfa()很麻烦必须加个a.fangfa()
// a.fangfa()
//所有可以用结构赋值 单独拎出来
let {fangfa}=a
fangfa ()
// console.log(name);
const b=['在吗','在干嘛','吃了吗']
let [a1,a2,a3]=b
// console.log(a1);