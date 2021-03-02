<template>
  <div>
    <button style="width: 10vw; height: 5vw" @click="changeTitle"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: ''
  },
  data() {
    return {
      myTitle: ''
    };
  },
  mounted() {
    this.myTitle = this.title;
  },
  methods: {
    changeTitle() {
      this.myTitle += 1;
      this.$emit('update:title', this.myTitle);
      this.$emit('update');
    }
  }
};
</script>
