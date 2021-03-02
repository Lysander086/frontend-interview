<template>
  <div></div>
</template>

<script>
const extend = {
  data() {
    return {
      name: 'extend name',
      extendVar: 'extendVar'
    };
  }
};
const mixin1 = {
  data() {
    return {
      name: 'mixin1 name'
    };
  }
};
const mixin2 = {
  extends: extend,
  data() {
    return {
      name: 'mixin2 name'
    };
  }
};

export default {
  mixins: [mixin1, mixin2],
  data() {
    return {};
  },
  components: {
    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {},
  mounted() {
    console.log(this.name);
  }
};
</script>

<style lang="scss" scoped></style>
