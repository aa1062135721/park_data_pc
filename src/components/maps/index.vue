<template>
  <div class="map_box">
    <fullscreen :fullscreen.sync="fullscreen">
    <div id="maps"></div>
    <div class="fullscreens" @click="checkFullscreen">
      <img src="../../assets/image/screen.png" v-if="!fullscreen"/>
      <img src="../../assets/image/closeScreen.png" v-else/>
    </div>
    <div class="error" v-if="errorShow">
      <div>
         <div class="heads">
           <div>
             <img src="../../assets/image/worrings.png" />
             <span>警告！</span>
           </div>
           <img src="../../assets/image/delete.png" />
         </div>
         <vue-seamless-scroll :data="warning" class="seamless-warp" :class-option="classOption">
           <div class="wooringBox">
             <div v-for="(item,index) in warning">{{item}}</div>
           </div>
         </vue-seamless-scroll>
      </div>
    </div>
    <div class="footers">
       <div>
         <div>
           <img src="../../assets/image/zm.png" />
           <span>照明总数</span>
         </div>
         <div>2537台</div>
       </div>
       <div>
         <div>
           <img src="../../assets/image/zx.png" />
           <span>在线</span>
         </div>
         <div>2537台</div>
       </div>
       <div>
         <div>
           <img src="../../assets/image/lx.png" />
           <span>离线</span>
         </div>
         <div>2537台</div>
       </div>
       <div>
         <div>
           <img src="../../assets/image/zc.png" />
           <span>正常</span>
         </div>
         <div>2537台</div>
       </div>
       <div>
         <div>
           <img src="../../assets/image/yc.png" />
           <span>异常</span>
         </div>
         <div>2537台</div>
       </div>
    </div>
    </fullscreen>
  </div>
</template>

<script>
  import vueSeamlessScroll from 'vue-seamless-scroll'
  import { BMPGL } from "@/assets/js/bmpgl.js";
  import mapStyle from "./custom_map_config.json";
  export default{
    data(){
      return{
        fullscreen:false,
         mapData:[
          {content:"我的备注",title:"灯1",position:{lat:29.630407,lng:106.594461},status:1},
          {content:"我的备注",title:"灯2",position:{lat:29.630192,lng:106.59394},status:1},
          {content:"我的备注",title:"灯3",position:{lat:29.629968,lng:106.593401},status:2},
          {content:"我的备注",title:"灯4",position:{lat:29.629787,lng:106.593041},status:3},
          {content:"我的备注",title:"灯5",position:{lat:29.63058,lng:106.595},status:1},
          {content:"我的备注",title:"大屏投影",position:{lat:29.629803,lng:106.594784},status:4},
        ],
        stausImg:{
          1:"http://miaoxing.oss-cn-beijing.aliyuncs.com/4577yellowIcon.png",
          2:"http://miaoxing.oss-cn-beijing.aliyuncs.com/7322redIcon.png",
          3:"http://miaoxing.oss-cn-beijing.aliyuncs.com/290closedIcon.png",
          4:"http://miaoxing.oss-cn-beijing.aliyuncs.com/6497dp.png"
        },
        errorShow:true,
        warning:[
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
          "发现照明设备N处异常，请尽快安排安全巡检及相关人员处理！",
        ]
      }
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
    components:{
      vueSeamlessScroll
    },
    mounted(){
      this.initMap()
    },
    methods:{
      checkFullscreen(){            //地图全屏还原
         this.fullscreen = !this.fullscreen
      },
      checkPop(){           //警告切换
         this.errorShow = !this.errorShow;
      },
      initMap(){
        let vm = this;
        BMPGL("qGSVUhadWLV610OK3ZhB9higDvVtjnWC").then((BMapGL) => {
          this.map = new BMapGL.Map('maps')    // 创建Map实例
          this.map .centerAndZoom(new BMapGL.Point(106.594461,29.629889), 18)  // 初始化地图,设置中心点坐标和地图级别
          this.map .enableScrollWheelZoom(true)     // 开启鼠标滚轮缩放
          this.map .setMapStyleV2({
            styleJson:mapStyle
          });
          this.setMarke()
          this.map .addEventListener("click",function(e){
            vm.map .setCenter({lng: e.latlng.lng, lat: e.latlng.lat})
          });
        })
      },
      setMarke(){
          this.mapData.forEach((item)=>{
             var point = new BMapGL.Point(item.position.lng,item.position.lat);
             var iconSize = new BMapGL.Size(33,28);                  //这里的Size大小一定要和实际图片的大小一样，不然显示会有问题
             var moveIconSize = new BMapGL.Size(38,41);              //这是投影图片的大小
             var icon = new BMapGL.Icon(this.stausImg[item.status],item.status!==4?iconSize:moveIconSize)
             var marker = new BMapGL.Marker(point,{icon:icon});
             var opts = {
               width: 200,
               title:item.title,
               enableMessage: false
             };
             var infoWindow = new BMapGL.InfoWindow(item.content,opts);
             this.map.addOverlay(marker);
             var statusTxt = {
               1:"启用",
               2:"出现故障",
               3:"停用",
               4:"启用"
             }
             var infoWindow = new BMapGL.InfoWindow("备注：当前设备已"+statusTxt[item.status], opts);  // 创建信息窗口对象
             	marker.addEventListener("click", function(){
             		this.map.openInfoWindow(infoWindow, point); //开启信息窗口
             	});
          })
      }
    }
  }
</script>

<style scoped="scoped" lang="scss">
.map_box{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  >div{
    width: 100%;
    height: 100%;
  }
  #maps{
    width: 100%;
    height: 100%;
  }
  .footers{
    z-index: 100;
    width: 100%;
    height: 0.78rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(9,18,32,0.9);
    display: flex;
    align-items: center;
    >div{
      width: 20%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      >div{
        display: flex;
        align-items: center;
        font-size:0.2rem;
        color: #FFFFFF;
        >img{
          width: 0.2rem;
          height: 0.2rem;
        }
        >span{
          font-size: 0.12rem;
          color: #1DA9AF;
          margin-left: 0.05rem;
        }
      }
      >div:last-child{
        margin-top: 0.1rem;
      }
    }
  }
  .error{
    z-index: 100;
    width: 100%;
    position: absolute;
    bottom: 0.89rem;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    >div{
      background-color: rgba(15,28,49,0.8);
      width: 95%;
      animation: rick 0.8s infinite ease-out;
      box-sizing: border-box;
      padding: 0.1rem 0.17rem;
      border-radius: 0.02rem;
      box-shadow: 0rem 0rem 0.1rem #E9310F inset;
      border: 1px solid #E9310F;
      position: relative;
      >.heads{
        display: flex;
        box-sizing: border-box;
        padding-bottom: 0.11rem;
        align-items:center;
        justify-content: space-between;
        >div{
          display: flex;
          align-items: center;
          >img{
            width: 0.17rem;
            height: 0.15rem;
            margin-right: 0.08rem;
          }
          >span{
            color: #F4C506;
            font-size: 0.16rem;
          }
        }
        >img{
          width: 0.1rem;
          height: 0.1rem;
        }
      }
      .seamless-warp{
       width: 100%;
       height: 0.8rem;
       overflow: hidden;
      }
      .wooringBox{
        height: 0.8rem;
        >div{
          font-size: 0.16rem;
          color: #F34139;
        }
        >div:not(:last-child){
          margin-bottom: 0.11rem;
        }
      }
    }
  }
  .fullscreens{
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    z-index: 100;
    width: 0.36rem;
    height: 0.36rem;
    >img{
      width: 100%;
      height: 100%;
    }
  }
}
@keyframes rick{
  0%{
    box-shadow: 0rem 0rem 0 #E9310F inset;
  }
  50%{
    box-shadow: 0rem 0rem 0.08rem #E9310F inset;
  }
  100%{
    box-shadow: 0rem 0rem 0.15rem #E9310F inset;
  }
}
/deep/ .BMap_bubble_pop{
  background-color: #14898F !important;
  border: 0 !important;
}
/deep/ .BMap_bubble_title{
  color: white !important;
}
/deep/ .BMap_bubble_content{
  color: white !important;
}
/deep/ img[src="http://webmap0.bdimg.com/image/api/iw_tail.png"]{
    content: url('../../assets/image/rigthSan.png');
}
/deep/ .BMap_bubble_center{
  height: 57px !important;
}
</style>
