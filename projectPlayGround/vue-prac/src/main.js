import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // via createElement(), make App a virtual dom, calling update would make it a real dom.
  render: h => h(App)

}).$mount('#app')
