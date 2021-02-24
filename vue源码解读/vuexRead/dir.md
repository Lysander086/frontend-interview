- [Vuex框架原理与源码分析](https://tech.meituan.com/2017/04/27/vuex-code-analysis.html)
  - info: **看的不是很懂**
  - 需要弄清楚的问题
    - from interviewer
      1. vuex如何处理大量数据的情况
    - in thread
      1. 使用Vuex只需执行 Vue.use(Vuex)，并在Vue的配置中传入一个store对象的示例，store是如何实现注入的？
      2. state内部是如何实现支持**模块配置和模块嵌套**的？
      3. 在执行dispatch触发action（commit同理）的时候，只需传入（type, payload），action执行函数中第一个参数store从哪里获取的？
      4. 如何区分state是外部直接修改，还是通过mutation方法修改的？
      5. 调试时的“时空穿梭”功能是如何实现的？


- [JS每日一题: 请简述一下vuex实现原理](https://segmentfault.com/a/1190000018251844)
  - info: **写的可以**
  - readCodez表示我有注释的地方