<template>
  <div class="shop_box">
    <div>
      <div id="shop_chartOne"></div>
      <p>
        <span>待租商铺</span>
        <span>584</span>
      </p>
    </div>
    <div>
      <div id="shop_chartTwo"></div>
      <p>
        <span>已租商铺</span>
        <span>584</span>
      </p>
    </div>
    <div>
      <div id="shop_chartThree"></div>
      <p>
        <span>未租商铺</span>
        <span>584</span>
      </p>
    </div>
  </div>
</template>

<script>
   import {options} from "./options.js"
   import echartsMinxi from "@/mixins/echartsMinxi";
  export default{
    mixins: [echartsMinxi],
    data(){
      return{
        shop_chartOne:null,
        shop_chartTwo:null,
        shop_chartThree:null
      }
    },
    mounted(){
      this.shop_chartOne = this.$echarts.init(document.getElementById('shop_chartOne'));
      this.shop_chartTwo = this.$echarts.init(document.getElementById('shop_chartTwo'));
      this.shop_chartThree = this.$echarts.init(document.getElementById('shop_chartThree'));
      this.setData();
    },
    methods:{
      setData(){
         this.shop_chartOne.setOption(options({name:"待租商铺",color:"#26CA7B"}));
         this.shop_chartTwo.setOption(options({name:"已租商铺",color:"#08D1D8"}));
         this.shop_chartThree.setOption(options({name:"未租商铺",color:"#E8C226"}));
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.shop_box{
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding: 0 0.2rem;
  margin-top: 0.38rem;
  display: flex;
  align-items: center;
  >div{
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
      width: 100%;
      height:1.3rem;
    }
    >p{
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      margin-bottom: 0 !important;
      >span:nth-of-type(1){
        font-size: 0.12rem;
        color: #188F98;
        margin-right: 0.15rem;
      }
      >span:nth-of-type(2){
        font-size: 0.2rem;
        color: #08D1D8;
      }
    }
  }
}
</style>
