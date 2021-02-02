<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      :name="name"
      :age="age"
      :gender="gender"
      :height="height"
      title="程序员成长指北"
      @inHello="handleEvent" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import app, { eb } from "@/util/app";

export default {
  mixins: [app],
  name: "Home",
  provide: {
    supplies: "medicine",
  },
  data() {
    return {
      name: "zany",
      age: "18",
      gender: "女",
      height: "158"
    }
  },
  methods: {
    handleEvent(evt) {
      // console.log("handleEvent: ", evt);
    },
  },
  components: {
    HelloWorld,
  },
  beforeMount() {
    // console.log("home.vue - beforeMount");
  },
  mounted() {
    // console.log(this.$options.name, " - mounted");
    // console.log(this.$children)

    setTimeout(() => {
      // this.$children[0].some = 'new some'
      // eb.$emit("event");
      // console.log(this.age)
    }, 1000);
    setTimeout(() => {
      // this.$children[0].some = 'new some'
      eb.$emit("event");
    }, 200);
  },
};
</script>
