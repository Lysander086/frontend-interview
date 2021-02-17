const div1 = document.getElementById('div1')

// let timer = null
// div1.addEventListener('drag', function (e) {
//     if (timer) {
//         return
//     }
//     timer = setTimeout(() => {
//         console.log(e.offsetX, e.offsetY)

//         timer = null
//     }, 100)
// })

// 节流: 过一段时间就执行请求
function throttle(fn, delay = 100) {
  let timer = null

  return function () {
    if (timer) {
      return // timer在一次开启后 会随着drag的发生一直存在
    }
    timer = setTimeout(() => {
      // debugger
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

div1.addEventListener('drag', throttle(function (e) {
  // debugger
  console.log(e.offsetX, e.offsetY)
}))

// div1.addEventListener('drag', function (event) {
//
// })
