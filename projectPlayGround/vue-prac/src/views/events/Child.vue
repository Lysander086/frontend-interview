<template>
  <div>
    <label>
      {{ label }}
<!--  @description:
    有了这个 $listeners property，你就可以配合 v-on="$listeners" 将所有的事件监听器指向这个组件的某个特定的子元素
-->
      <input
        v-on="$listeners"
        v-bind="$attrs"
      />
    </label>
    <!--    <input type="text" v-model="value" />-->
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {},
  computed: {
    inputListeners() {
      var vm = this;
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign(
        {},
        // 我们从父级添加所有的监听器
        this.$listeners,
        // 然后我们添加自定义监听器，
        // 或覆写一些监听器的行为
        {
          // 这里确保组件配合 `v-model` 的工作
          input(event) {
            vm.$emit('input', event);
          },
          focus(event) {
            vm.$emit('focus', event);
          }
        }
      );
    }
  },
  data() {
    return {
      label: 'label',
      value: 'default input value'
    };
  },
  components: {
    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {
    changeData() {}
  }
};
</script>

<style lang="scss" scoped></style>
