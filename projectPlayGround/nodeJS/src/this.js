Function.prototype.getThis = function() {
  console.log(this);
}

function sayHi() {
  console.log('hi');
}

sayHi.getThis()
