<template>
  <div class="energy">
    <div id="energy"></div>
  </div>
</template>

<script>
  import {options} from "../radar/options.js"
  import echartsMinxi from "@/mixins/echartsMinxi";
  export default{
    mixins: [echartsMinxi],
    data(){
      return{
        energy:null
      }
    },
    mounted(){
      this.energy = this.$echarts.init(document.getElementById('energy'));
      this.setData()
    },
    methods:{
      setData(){
        var data = {
          indicator:[{name: '供热',},{name: '消防',},{name: '照明',},{name: '车位',},{name: '网络',}],
          one:{
            title:"当日用电",
            data:[14200, 3000, 20000, 35000, 50000]
          },
          two:{
            title:"当月用电",
            data:[20000, 20000, 10000, 15000, 30000]
          }
        }
        this.energy.setOption(options(data));
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.energy{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 0.1rem 0 0.2rem;
  >div{
    width: 100%;
    height: 100%;
  }
}
</style>
