// 通用的事件绑定函数
function bindEvent_ori(elem, type, fn) {
  elem.addEventListener(type, fn)
}

//
function bindEvent(elem, type, selector, fn) {
  if (fn == null) {
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 代理绑定
      if (target.matches(selector) /* matches: 判断dom元素是否符合selector指定要选中的元素 */) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

// 普通绑定
const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // console.log(event.target) // 获取触发的元素
  event.preventDefault() // 阻止默认行为
  alert(this.innerText)
})

// 代理绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', event => {
  event.preventDefault()
  const target = event.target
  if (target.nodeName === 'A') {
    alert(target.innerHTML)
  }
})
