// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}

const p1 = document.getElementById('p1')
bindEvent(p1, 'click', event => {
  console.log('activated')
})

const body = document.body
bindEvent(body, 'click', event => {
  console.log('canceled')
})
