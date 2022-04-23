function zfc(str) {
  // split('')      //将字符串转成数组
  //console.log(str.split('')); 
  //[ '我', '不', '知', '道' ]
  //reverse()      //反转方法
  //console.log(str.split('').reverse());  
  //[ '道', '知', '不', '我' ]
  //join 将数组转成字符串
  return(str.split('').reverse().join(''))
}
console.log(zfc('我不知道'))
//道知不我
