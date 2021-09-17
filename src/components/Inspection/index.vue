<template>
  <div class="Inspection">
    <div class="head">
      <div>楼栋</div>
      <div>楼层</div>
      <div>异常情况</div>
    </div>
    <vue-seamless-scroll :data="allData" class="seamless-warp" :class-option="classOption">
        <div class="cont">
          <div v-for="(item) in allData">
            <div class="danshens">{{item.title}}</div>
            <div>{{item.lou}}</div>
            <div class="right_btn">
              <div :class="{'btns':true,'error':item.status!==1}">{{item.status==1?'正常':'异常'}}</div>
            </div>
          </div>
        </div>
    </vue-seamless-scroll>
  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  export default{
    data(){
      return{
         allData:[
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:0},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
           {title:"楼栋名称一",lou:1,status:1},
         ]
      }
    },
    components:{
      vueSeamlessScroll
    },
    computed: {
     classOption () {
       return {
       step: 0.6, // 数值越大速度滚动越快
       limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
       hoverStop: true, // 是否开启鼠标悬停stop
       direction: 1, // 0向下 1向上 2向左 3向右
       openWatch: true, // 开启数据实时监控刷新dom
       singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
       singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
       waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
       }
     }
    },
    methods:{}
  }
</script>

<style scoped="scoped" lang="scss">
.Inspection{
  width: 100%;
  height: 90%;
  box-sizing: border-box;
  padding: 0.2rem 0.24rem 0.2rem 0.15rem;
  .head{
    box-sizing: border-box;
    padding:0.06rem 0rem 0.06rem 0;
    display: flex;
    align-items: center;
    >div{
      text-align: center;
      width: 33%;
      font-size: 0.12rem;
      color: #1DA9AF;
    }
    >div:nth-of-type(1){
      text-align: left;
    }
    >div:nth-of-type(3){
      text-align: right;
    }
  }
  .seamless-warp{
   width: 100%;
   height: 100%;
   overflow: hidden;
  }
  .cont{
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-sizing: border-box;
    >div{
      text-align: center;
      display: flex;
      font-size: 0.12rem;
      color: #FFFFFF;
      height: 0.3rem;
      align-items: center;
      >div{
       width: 33%;
      }
      >div:nth-of-type(1){
        text-align: left;
      }
      >div:nth-of-type(3){
        text-align: right;
      }
    }
  }
}
.right_btn{
  display: flex;
  justify-content: flex-end;
}
.btns{
  width: 0.42rem;
  height: 0.18rem;
  background-color: #20513C;
  color: #26CA7B;
  display: flex;
  border-radius: 0.02rem;
  align-items: center;
  justify-content: center;
}
.error{
  background-color: #4D2E38 !important;
  color: #F02A21 !important;
}
.danshens{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  word-break:break-all;
}
</style>
