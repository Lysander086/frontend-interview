Function.prototype.call1= function() {
  const args = Array.prototype.slice.call(arguments)
  const context = args.shift()
  const fn = this
  return fn.apply(context, args)
}

function getX(){
  console.log('x: ', this.x);
}

getX.call1({x: 100})
