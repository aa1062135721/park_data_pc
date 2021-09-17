export default{
  mounted(){
    setTimeout(()=>{
      this.$bus.$on("scollWin",()=>{
        var echartsIds = ['shop_chartOne','shop_chartTwo','shop_chartThree','economicsEacharts','radar','energy','parkingLot']
        echartsIds.forEach((item)=>{
          if(this[item]!==undefined){
            this[item].resize()
          }
        })
      })
    },0)
  },
  beforeDestroy(){
     this.$bus.$off("scollWin");
  }
}
