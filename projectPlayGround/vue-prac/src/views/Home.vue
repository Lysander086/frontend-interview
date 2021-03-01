<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      @hook:created="'childCreated'"
      :name="name"
      :age="age"
      :gender="gender"
      :height="height"
      title="程序员成长指北"
      @inHello="handleEvent"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import appMixin, { eventBus } from '@/util';

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
    this.justPromise()
      .then(res => this.justPromise('2nd'))
      .then(res => {
        console.log(res);
      });
  }
};
</script>
