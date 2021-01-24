import Vue from 'vue'

const app = {
  beforeMount() {
   // console.log("app mixins " + this.$options.name + "- beforeMount");
  },
  mounted() {
    // console.log('app mixin: ',this.$options.name, " - mounted");
  },
};

export default app;
export const eb = new Vue()
