var str='abshbujaddd'
var o={}
for(var i=0;i<=str.length;i++){
  var chars=str.charAt(i)
  if(o[chars]){  //o[chars] 得到属性值
    o[chars]++
    // console.log(o[chars]);
  }else{
    o[chars]=1
    // console.log(o[chars]);
  }
}
console.log(o);
var max=0
var ch=''
for(var k in o){
  if(o[k]>max){
    max=o[k]
    ch=k
  }
}
// console.log(max,ch);
console.log(ch);