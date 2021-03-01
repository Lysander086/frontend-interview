/**
 * slice: 纯函数， 不改变原数组
 */
function testSlice () {
  var arr1 = [1, 23, 44, 55, 66, 77, 888, 'fff']
  console.log(arr1.length)
  arr1 = arr1.slice(2) // 删除头部两个元素
  console.log(arr1)
}

testSlice()

/**
 * splice: 非纯函数
 */

function testSplice () {
  var arr1 = [1, 23, 44, 55, 66, 77, 888, 'fff']
  var arr2 = arr1.splice(2, 4) //从2开始截取4个元素
  console.log(arr1, arr2)
}

// testSplice();
