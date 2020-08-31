/* 有两种情况 */
// 1.函数作为返回值
// function create() {
//     const a = 100
//     return function () {
//         console.log(a)
//     }
// }

// const fn = create()
// const a = 200
// fn() // 100

// 函数作为参数被传递
function print(fn2) {
    const a = 200
    fn2()
}
const a = 100
function fn2() {
    console.log(a)
}
print(fn2) // 100

// 所有的自由变量的查找，是在函数定义的地方，向上级作用域查找
// 不是在执行的地方！！！
