async function async1() {
  console.log('async1 start')  // 2
  await async2()
  console.log('async1 end') // 微任务 6
}

async function async2() {
  console.log('async2') // 3

}

console.log('start') // 1


setTimeout(() => {
  console.log('setTimeout') // 8
}, 0)

async1()

// 初始化 promise时, 里面的函数会立即执行
new Promise((resolve => {
  console.log('promise 1') // 4
  resolve
})).then(() => {
  console.log('promise 2') // 微任务 7
})

console.log('end') // 5, 同步代码执行完毕

// 执行微任务, 6 7
// 尝试触发dom渲染
// 触发event loop 机制, 执行宏任务
