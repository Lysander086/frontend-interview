<template>
  <div>
    <text-document :title.sync="title" @update="onUpdate"> </text-document>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {}, 2000);
  },
  data() {
    return {
      title: 'parent value'
    };
  },
  components: {
    TextDocument: () => import('./Child')
  },
  methods: {
    onFocus(event) {
      console.log(event);
    },
    onInput(event) {
      // console.log(event);
    },
    onUpdate() {
      console.log(this.title);
    }
  }
};
</script>

<style lang="scss" scoped></style>
