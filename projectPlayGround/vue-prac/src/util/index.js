import Vue from 'vue'

const appMixin = {
  methods: {
    justPromise (any = 'res') {
      return Promise.resolve(any)
    }
  },
  beforeMount () {
    // console.log("app mixins " + this.$options.name + "- beforeMount");
  },
  mounted () {
    // console.log('app mixin: ',this.$options.name, " - mounted");
  }
}

export default appMixin
export const eventBus = new Vue()
