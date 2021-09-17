<template>
  <div class="parkingLot">
    <div id="parkingLot"></div>
  </div>
</template>

<script>
  import {options} from "./option.js";
  import echartsMinxi from "@/mixins/echartsMinxi";
  export default{
    mixins: [echartsMinxi],
    data(){
      return{
        parkingLot:null
      }
    },
    mounted(){
      this.parkingLot = this.$echarts.init(document.getElementById('parkingLot'));
      this.setData()
    },
    methods:{
      setData(){
         this.parkingLot.setOption(options(this.$echarts));
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.parkingLot{
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding-top: 0.15rem;
  padding-left: 0.15rem;
  >div{
    width: 100%;
    height: 100%;
  }
}
</style>
