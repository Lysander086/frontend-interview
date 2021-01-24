<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import app from "@/util/app";

export default {
  mixins: [app],

  name: "Home",
  components: {
    HelloWorld,
  },
  beforeMount() {
   // console.log("home.vue - beforeMount");
  },
  mounted() {
    console.log(this.$options.name, " - mounted");
  },
};
</script>
