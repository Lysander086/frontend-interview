console.log(100)
setTimeout(() => {
  console.log(200)
})


Promise.resolve().then(() => {
  setTimeout(() => {
    console.log(300)
  }, 200)
})
console.log(400)
