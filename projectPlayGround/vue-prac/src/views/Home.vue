<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld selector-value="whatever" :selectorData="[1, 2, 3, 4]" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import appMixin from '@/util';

export default {
  render(h) {
    return h('div', 'anyHere');
  },
  mixins: [appMixin],
  name: 'Home',
  provide: {
    supplies: 'medicine'
  },
  data() {
    return {
      name: 'zany',
      age: '18',
      gender: '女',
      height: '158'
    };
  },
  methods: {
    handleEvent(evt) {
      // console.log("handleEvent: ", evt);
    }
  },
  components: {
    HelloWorld
  },
  beforeMount() {
    // console.log("home.vue - beforeMount");
  },
  async mounted() {
    let res = await Promise.resolve(Promise.resolve('res'));
    console.log(res);
  }
};
</script>
