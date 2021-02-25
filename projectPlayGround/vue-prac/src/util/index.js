import Vue from 'vue';

const appMixin = {
  methods: {
    delayedPromise() {
      // setTimeout(() => {
        return Promise.resolve('res');
      // });
    }
  },
  beforeMount() {
    // console.log("app mixins " + this.$options.name + "- beforeMount");
  },
  mounted() {
    // console.log('app mixin: ',this.$options.name, " - mounted");
  }
};

export default appMixin;
export const eventBus = new Vue();
