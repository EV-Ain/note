//翻转数组reverse
var arr=['red','pink','blue']
arr.reverse()
console.log(arr); //[ 'blue', 'pink', 'red']

//数组排序(冒泡排序)
var arr1=[26,3,88,5]
arr1.sort(function (a,b) {
  return a-b
})
console.log(arr1);