/** store是怎么注册的
 *  - 源码位置 https://github.com/vuejs/vuex/blob/665455f8daf8512e7adbf63c2842bc0b1e39efdb/src/mixin.js
 */
export default function vueRegister (Vue) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    // vuex在vue 的生命周期中的初始化钩子前插入一段 Vuex 初始化代码, 给 Vue 的实例注入一个 $store 的属性
    Vue.mixin({ beforeCreate: vuexInit })
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit
      _init.call(this, options)
    }
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    const options = this.$options
    // store injection
    if (options.store) {
      this.$store =
        typeof options.store === 'function' ? options.store() : options.store
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store
    }
  }
}

/**
 * mutations，commit 是怎么实现的: 源码位置  https://github.com/vuejs/vuex/blob/665455f8daf8512e7adbf63c2842bc0b1e39efdb/src/store.js#L417
 * @param {*} store : 当前 Store 实例
 * @param {*} type: 为 mutation 的 key
 * @param {*} handler: mutation 执行的回调函数
 * @param {*} path : 当前模块的路径
 */
function registerMutation (store, type, handler, path = []) {

  // 首先通过 type 拿到对应的 mutation 对象数组
  const entry = store._mutations[type] || 
  // 使得 entry和 store._mutations 同时为 []
  (store._mutations[type] = [])

  //  把一个 mutation 的包装函数 push 到这个数组中
  entry.push(function wrappedMutationHandler (payload) {
    handler(
      // getNestedState(store.state, path) 方法得到当前模块的 state
      getNestedState(store.state, path), payload
      )
  })
}


//
/**
 * @description: commit的定义, [源码位置](https://github.com/vuejs/vuex/blob/665455f8daf8512e7adbf63c2842bc0b1e39efdb/src/store.js#L82)
 * @param _type: 表示 mutation 的类型
 *  -
 * @param _payload: 表示额外的参数
 * @param _options
 */
function commit (_type, _payload, _options) {
  // check object-style commit
  const {
    type,
    payload,
    options
  } = unifyObjectStyle(_type, _payload, _options)

  const mutation = { type, payload }
  const entry = this._mutations[type]
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`[vuex] unknown mutation type: ${type}`)
    }
    return
  }

  this._withCommit(() => {
    entry.forEach(function commitIterator (handler) {
      handler(payload)
    })
  })
  this._subscribers.forEach(sub => sub(mutation, this.state))

  if (
      process.env.NODE_ENV !== 'production' &&
      options && options.silent
  ) {
    console.warn(
        `[vuex] mutation type: ${type}. Silent option has been removed. ` +
        'Use the filter functionality in the vue-devtools'
    )
  }
}