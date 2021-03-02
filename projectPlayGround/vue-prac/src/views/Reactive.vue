<template>
  <div class="main">
    <button class="button" @click="buttonClick"></button>
  </div>
</template>

<script>
// @ is an alias to /src
import localForage from 'localforage';
export default {
  data() {
    return {
      test: 'h1',
    };
  },

  async beforeRouteLeave(to, from, next) {
    // console.log(to,from);
    next(false);
  },

  beforeMount() {
    sessionStorage.setItem('test', '');
  },
  async mounted() {
    await this.mockRequest(false, 'here').then(res=>{
      console.log(res);
    });
    console.log('after?');
  },
  methods: {
    buttonClick() {
      console.log('hi');
    },
  },
};
</script>


<style lang="scss" scoped>
.button {
  width: 100px;
  height: 100px;
  border-radius: 3vw;
}
</style>
