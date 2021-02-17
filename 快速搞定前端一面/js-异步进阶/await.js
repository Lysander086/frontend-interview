!(async function () {
  const p1 = Promise.resolve(300)
  const data = await p1
  console.log('data', data)

})()

!(async function () {
  const data1 = await 400
  console.log('data1' ,data1)

})

