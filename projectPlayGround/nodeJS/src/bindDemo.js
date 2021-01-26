Function.prototype.bind1 = function () {
  //  参数拆解为数组
  const args = Array.prototype.slice.call(arguments);

  const context = args.shift();
  return () => {
    console.log(this);
    return this.apply(context, args);
  };
};

function fn1(a, b) {
  console.log("fn1 this:", this);
  // console.log(a, b, arguments);
  return "this is fn";
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20);

fn2();
