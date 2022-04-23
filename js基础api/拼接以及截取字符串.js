//拼接字符串 concat('字符串1','字符串2')
var str='andy'
console.log(str.concat('red')); //andyred

//截取字符串
//substr('截取的起始位置','截取几个字符') 
console.log(str.substr(1,1)); //n

let a=['a','b','c']
// let b=a.concat()
let b=a.slice()
console.log(a);
console.log(b);
console.log(b!=a);