<template>
  <div>
    <base-input
      :value="value"
      @input="onInput"
      @focus="onFocus"
    ></base-input>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(()=>{
      console.log(this.value);
    }, 2000)
  },
  data() {
    return {
      value: 'parent value'
    };
  },
  components: {
    BaseInput: () => import('./Child')
  },
  methods: {
    onFocus(event) {
      console.log(event);
    },
    onInput(event) {
      // console.log(event);
    }
  }
};
</script>

<style lang="scss" scoped></style>
