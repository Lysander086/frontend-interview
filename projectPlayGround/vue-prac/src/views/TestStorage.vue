<template>
  <div></div>
</template>

<script>
import { get_localStorage, set_localStorage } from '@/util/storage';

export default {
  computed: {
    testStorageVal() {}
  },
  mounted() {
    sessionStorage.setItem('test', 1);
    this.anyMethod();
  },
  data() {
    return {};
  },
  components: {
    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {
    anyMethod(variable = sessionStorage['test']) {
      console.log(variable);
    }
  }
};
</script>

<style lang="scss" scoped></style>
