function deepClone () {
  // 1. 递归出口
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let res
  // 2. 判断数组还是对象
  if (obj instanceof Array) {
    res = []
  } else {
    res = {}
  }

  // 3. object {} 和 array []  统一可以使用 for in 进行循环
  for (let key in obj) {
    // 确保不是引用的隐式原型链上的属性
    if (obj.hasOwnProperty(key)) {
      // 4. 递归调用
      res[key] = deepClone(obj[key])
    }
  }

  return res
}

function debounce (fn, timer, delay = 500) {
  if (timer) {
    clearTimeout(timer) // 导致原有函数不再执行
    timer = null

    timer = setTimeout(() => {
      fn()
      // 注意最后把timer清空, 否则timer是一个数值n，代表 n * 0.1s
      timer = null
    }, delay)
  }
}

function throttle (fn, timer, delay = 500) {
  // 每隔一段时间执行 一下, 原来就有timer请等着
  if (timer) {
    return
  }

  timer = setTimeout(() => {
    fn()
    timer = null
  }, delay)
}


class jQuery{

}