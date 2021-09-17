<template>
  <div class="radar">
    <div id="radar"></div>
  </div>
</template>

<script>
  import {options} from "./options.js"
  import echartsMinxi from "@/mixins/echartsMinxi";
  export default{
    mixins: [echartsMinxi],
    data(){
      return{
        radar:null
      }
    },
    mounted(){
      this.radar = this.$echarts.init(document.getElementById('radar'));
      this.setData()
    },
    methods:{
      setData(){
        var data = {
          indicator:[{name: '监控',},{name: '网络',},{name: '车位',},{name: '照明',},{name: '消防',}],
          one:{
            title:"设备总数",
            data:[14200, 3000, 20000, 35000, 50000]
          },
          two:{
            title:"照明设备",
            data:[20000, 205, 10000, 30000, 30000]
          }
        }
        this.radar.setOption(options(data));
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.radar{
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
