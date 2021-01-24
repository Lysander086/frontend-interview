// console.log(typeof (typeof {}));
// console.log(1);

class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const len = result.length;
    for (let i = 0; i < len; i++) {
      this[i] = result[i];
    }

    this.length = len;
    this.selector = selector;
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      fn(element);
    }
  }
  on(type, fn) {
    return this.each((ele) => {
      ele.addEventListener(type, fn, false);
    });
  }
}

// 增加插件
jQuery.prototype.dialog = function (info) {
  alert(info);
};

// 复写
class myJquery extends jQuery {
  constructor(selector) {
    // 拥有父类的复杂性
    super(selector);
  }
  // 扩展自己的方法
  addClass(className) {}
  style(data) {}
}
