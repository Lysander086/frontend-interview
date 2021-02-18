<template>
  <div class="main">
    <button class="button" @click="buttonClick"></button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  mounted () {
    sessionStorage.setItem('test', 1)
    console.log(sessionStorage['test'] === 1);
  },
  methods: {
    buttonClick(){
      console.log('hi');
    }
  },
  data() {
    return {
      test: 'h1',
    };
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
