import Vue from 'vue'

const app = {
  methods:{
    mockRequest (toReject = false, mockRes) {
      return new Promise((resolve, reject) => {
        if (toReject){
          setTimeout(()=>{
            reject(mockRes)
          },50)
        }else {
          setTimeout(()=>{
            resolve(mockRes)
          },50)
        }

      })
    }
  },
  beforeMount() {
   // console.log("app mixins " + this.$options.name + "- beforeMount");
  },
  mounted() {
    // console.log('app mixin: ',this.$options.name, " - mounted");
  },
};

export default app;
export const eb = new Vue()
