function attempt(a, b, c) {

  let args = Array.prototype.slice.call(arguments)
  console.log('args ', args, '.  arguments', arguments)
  return a + b + c
}

// attempt(1, 2, 3)

function display(some, cb) {
  console.log('args:', some)
  cb && cb(some + ' in cb')
}

display('some', (a) => {
  console.log(a)
})
