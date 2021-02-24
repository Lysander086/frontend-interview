<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      //生成指定范围的随机整数
      const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
      //生成固定长度的非空数组
      const randomArr = length => Array.from({ length }, (item, index) => index * 2);
      const time = randomNum(100, 3000);//模拟请求时间
      console.log('getData start');
      return new Promise(resolve => {
        setTimeout(() => {
          const arr = randomArr(10);
          resolve(arr);
        }, time);
      });
    }
  },
  // async created() {
  //   console.log('created');
  //   /*生命周期钩子函数中的异步赋值，vue会在一遍流程走完之后执行update,
  //     也就是说, 会把此组件的其他所有生命周期执行完后, 在执行created 生命周期中剩下的代码
  //     */
  //   this.list = await this.getData();
  //   console.log('getData end');
  // },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    let token = 'any';
    console.log(!!token);
  },
  updated() {
    console.log('updated');
  }
};
</script>

<style lang='scss' scoped></style>
