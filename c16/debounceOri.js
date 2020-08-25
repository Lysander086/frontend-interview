const input1 = document.getElementById('input1')

let timer = null
input1.addEventListener('keyup', function () {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    // 模拟触发 change 事件
    console.log(input1.value)

    // 清空定时器
    timer = null
  }, 500)
})

// input1.addEventListener('keyup', debounce(function (e) {
//   console.log(e.target)
//   console.log(input1.value)
// }, 600))
