<template></template>

<script>
export default {
  inheritAttrs: false, // 可以关闭自动挂载到组件根元素上的没有在props声明的属性

  name: "inHello",
  data() {
    return {};
  },
  inject: {
    supplies: {
      default() {
        return "no supply";
      },
    },
  },
  components: {
    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {},
  mounted() {
    // console.log(this.$options.name,' - supplies:  ',this.supplies)
    setTimeout(() => {
      // this.$emit('inHello', 'evt from inHello')
      // console.log()
      this.$nextTick(()=>{
        // this.$attrs.age = 23
        this.$set( this.$attrs ,'age', 23)
        // console.log(this.$options.name, this.$attrs.age)
      })
    },200);
    // console.log(this.$options.name, " ", this.$attrs);

  },
};
</script>

<style lang="scss" scoped></style>
