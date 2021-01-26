function print() {
  let a = 200;
  fn();
}

let a = 100;

function fn() {
  console.log(a);
}

print(fn)
