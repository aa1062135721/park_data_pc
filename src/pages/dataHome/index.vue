<template>
  <div class="park_box">
     <div class="headers">
        <div class="texts">
          {{dateTime.date}}&emsp;{{dateTime.week}}&emsp;{{dateTime.time}}
        </div>
        <div class="titles">
          <img src="../../assets/image/titles.png" />
        </div>
        <div class="texts weters">
          多云&emsp;北风1~2级&emsp;气温25~32℃
        </div>
     </div>
     <div class="contents">
       <div class="survey">
          <Titles title="园区概览"/>
          <Tabox/>
       </div>
       <div class="echarts_box">
         <div class="lefts">
           <div>
            <Titles title="商铺租赁分析"/>
            <shopsEachrts/>
           </div>
           <div class="analysis">
             <Titles title="经济运行分析"/>
             <economicsEacharts/>
             <div class="lenged">
               <div>
                 <div></div>
                 <span>重点企业</span>
               </div>
               <div>
                 <div></div>
                 <span>龙头企业</span>
               </div>
               <div>
                 <div></div>
                 <span>规上企业</span>
               </div>
             </div>
           </div>
           <div>
             <Titles title="园区基础设备分布"/>
             <div class="equipment">
               <div class="eq_left">
                 <div>
                   <div>1350</div>
                   <span>设备总数</span>
                 </div>
                 <div>
                   <div>1350</div>
                   <span>照明设备</span>
                 </div>
                 <div>
                   <div>1350</div>
                   <span>监控设备</span>
                 </div>
               </div>
               <radar/>
             </div>
           </div>
         </div>
         <div class="center">
           <maps/>
         </div>
         <div class="right">
           <div>
             <Titles title="能耗情况分析"/>
             <div class="equipment">
               <div class="eq_left">
                 <div>
                   <div>1350</div>
                   <span>当日用电</span>
                 </div>
                 <div>
                   <div>1350</div>
                   <span>当月用电</span>
                 </div>
                 <div>
                   <div>1350</div>
                   <span>总用电</span>
                 </div>
               </div>
               <energy/>
             </div>
           </div>
           <div>
             <Titles title="安全巡检情况"/>
             <Inspection/>
           </div>
           <div>
             <Titles title="车位使用概况"/>
             <parkingLot/>
           </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
  import "@/assets/js/rem.js";
  import Titles from "../../components/TitleCompont/idnex.vue"
  import Tabox from "../../components/TabBox/index.vue"
  import shopsEachrts from "../../components/shopsEachrts/index.vue"     //商铺租聘
  import economicsEacharts from "../../components/economicsEacharts/index.vue"     //经济运营
  import radar from "../../components/radar/index.vue"     //园区基础设备分布
  import energy from "../../components/energy/index.vue"     //能耗情况分析
  import Inspection from "../../components/Inspection/index.vue"     //能耗情况分析
  import parkingLot from "../../components/parkingLot/index.vue"     //车位使用概况
  import maps from "../../components/maps/index.vue"     //地图
  export default{
    data(){
      return{
         map:null,
         dateTime:{},
         timer:null
      }
    },
    components:{
      Titles,Tabox,shopsEachrts,
      economicsEacharts,radar,
      energy,Inspection,parkingLot,
      maps
    },
    mounted(){
      this.dateTime = this.$commonJs.getTime();
      window.addEventListener('resize', this.resizeHandler)
    },
    destroyed(){
      window.removeEventListener("resize", this.resizeHandler, false)
    },
    methods:{
      resizeHandler() {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.$bus.$emit('scollWin')
        }, 500)
      },
    }
  }
</script>

<style scoped="scoped" lang="scss">
@import '../../assets/css/park_data.scss';
</style>
