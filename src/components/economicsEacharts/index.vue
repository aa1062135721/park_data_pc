<template>
  <div class="economicsEacharts">
    <div id="economicsEacharts"></div>
  </div>
</template>

<script>
  import {options} from "./option.js"
   import echartsMinxi from "@/mixins/echartsMinxi";
  export default{
    mixins: [echartsMinxi],
    data(){
      return{
        economicsEacharts:null
      }
    },
    mounted(){
      this.economicsEacharts = this.$echarts.init(document.getElementById('economicsEacharts'));
      this.setData()
    },
    methods:{
      setData(){
        this.economicsEacharts.setOption(options(this.$echarts));
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.economicsEacharts{
  width: 100%;
  height: 90%;
  margin-top: 0.2rem;
  >div{
    width: 100%;
    height: 95%;
  }
}
</style>
