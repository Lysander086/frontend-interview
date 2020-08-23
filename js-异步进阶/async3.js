async function async1() {
  console.log('async1 start') // 2
  await async2()

  console.log('async1 end') // 5 关键在这一步，它相当于放在 callback中

  await async3()
  console.log('async1 end 2') // 7


}

async function async2() {
  console.log('async2') // 3
}


async function async3() {
  console.log('async3') // 6
}

console.log('script start') // 1
async1()
console.log('script end') // 4
