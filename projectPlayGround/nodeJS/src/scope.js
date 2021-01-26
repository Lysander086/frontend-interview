const person = {
  name: "Tony",
  sayHi() {
    console.log(this);
  },
  wait() {
    setTimeout(() => {
      console.log(this); // 这里取当前对象
    });
  },
  wait2() {
    setTimeout(function() {
      console.log(this);
    },1000)
  },
  wait3() {
    this.canCall(function(){
      console.log(this);
      console.log('-----');
      console.log(this.global);
    })
  },
  canCall(cb){
    cb && cb()
  }
};

// person.sayHi()
// console.log(person.__proto__);
person.wait3();
