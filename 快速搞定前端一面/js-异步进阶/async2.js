let p4 = Promise.resolve('some data here')

!(async function () {
  const res = await p4
  console.log('res', res)
})()


// try catch  处理异步异常

!(async function () {
  const p4 = Promise.reject('err1')

  try {
    const res = await p4
    console.log(res)
  } catch (ex) {
    console.error(ex)

  }
})()
