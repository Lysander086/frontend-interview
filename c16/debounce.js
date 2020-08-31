const input1 = document.getElementById('input1')

// 防抖
function debounce(fn, delay = 500) {
  // timer 是闭包中的
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

input1.addEventListener('keyup', debounce(function (e) {
      // console.log('e.target:', e.target)
      console.log('e:', e)
      console.log(input1.value)
    }, 600)
)
