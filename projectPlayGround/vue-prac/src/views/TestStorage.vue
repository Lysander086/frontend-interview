<template>
  <div>
    <h1>{{testStorageVal}}</h1>
  </div>
</template>

<script>
import { get_localStorage, set_localStorage } from '@/util/storage';

export default {
  computed: {
    testStorageVal() {
      return get_localStorage('test');
    }
  },
  mounted() {
    // console.log(this.testStorageVal);
    set_localStorage('test', 'testVar');
    setTimeout(() => {
      set_localStorage('test', '3');
    }, 2000);
  },
  data() {
    return {};
  },
  components: {
    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {}
};
</script>

<style lang='scss' scoped></style>
