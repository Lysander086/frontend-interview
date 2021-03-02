<template>
  <div class="hello-main">
    <h1>hello world</h1>
    <h2>{{ some }}</h2>
<!--    <in-hello v-bind="$attrs"></in-hello>-->
  </div>
</template>

<script>
import appMixin, { eventBus } from "@/util";

export default {
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性

  mixins: [appMixin],
  name: "HelloWorld",
  components: {
    inHello: () => import("./inHello"),
  },
  methods: {
    fromHello(evt) {
      this.$emit("inHello", evt);
    },
  },
  inject: {
    supplies: {
      default() {
        return "no supply";
      },
    },
  },
  data() {
    return {
      some: "hey",
    };
  },
  props: {
    msg: '',
    selectorValue:  '',
    selectorType: '',
    selectorId: '',
    selectorData:  {
      type: Array,
      default() {
        return []
      }
    }
  },
  beforeMount() {
    // console.log(      this.$options.name," - beforeMount"    );
  },
  created() {

  },
  mounted() {
    // console.log(this.selectorValue, this.selectorData);
  },
  beforeDestroy() {
    eventBus.$off("event", (res) => {
      // console.log("event off:", res);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
