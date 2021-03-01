<template>
  <div>
<!--    <h1>{{computedCount}}</h1>-->
<!--    <h1>{{testVuexAlias}}</h1>-->
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  data() {
    return {
      localCount: 1
    };
  },
  components: {

    // ComName: () => import( "./views/ExperienceDetails")
  },
  methods: {},
  computed: {
    ...mapState(['count'])
  }
};
</script>

<style lang='scss' scoped></style>
