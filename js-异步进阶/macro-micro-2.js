const $p1 = $('<p>一段文字</p>')
const $p2 = $('<p>一段文字</p>')
const $p3 = $('<p>一段文字</p>')
$('#container')
    .append($p1)
    .append($p2)
    .append($p3)


// 微任务: dom渲染前
Promise.resolve().then(() => {
  console.log('length1', $('#container').children().length)
  alert('Promise then') // 查看dom 渲染与否
})


// 宏任务
setTimeout(function () {
  console.log('length1', $('#container').children().length)
  alert('setTimeout')

})
