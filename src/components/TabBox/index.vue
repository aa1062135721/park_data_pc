<template>
  <div class="survey_tab">
    <div>
      <div class="icons">
        <img src="../../assets/image/miske.png" />
      </div>
      <div class="totals">
        <div>2345²</div>
        <div>总规划建筑面积</div>
      </div>
    </div>
    <div>
      <div class="icons">
        <img src="../../assets/image/form.png" />
      </div>
      <div class="totals">
        <div>1288</div>
        <div>厂房总数</div>
      </div>
    </div>
    <div>
      <div class="icons">
        <img src="../../assets/image/money.png" />
      </div>
      <div class="totals">
        <div>234558</div>
        <div>产业总值/万元</div>
      </div>
    </div>
    <div>
      <div class="icons">
        <img src="../../assets/image/shuju.png" />
      </div>
      <div class="totals">
        <div>5874</div>
        <div>占地面积/亩</div>
      </div>
    </div>
    <div>
      <div class="icons">
        <img src="../../assets/image/back.png" />
      </div>
      <div class="totals">
        <div>584</div>
        <div>入驻企业数</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped="scoped" lang="scss">
.survey_tab{
    margin-top: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >div{
      width: 19%;
      background: url(../../assets/image/sm_bg.png) no-repeat;
      background-size:100% 100%;
      height: 0.9rem;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0.15rem 0;
      >.icons{
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        >img{
          width: 0.76rem;
          height: 0.55rem;
        }
      }
      >.totals{
        height: 100%;
        border-left: 1px solid #14898F;
        width: 60%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        >div:nth-of-type(1){
          font-size:0.28rem;
          color: #1DA9AF;
          font-weight: bold;
          margin-bottom: 0.1rem;
        }
        >div:nth-of-type(2){
          font-size:0.14rem;
          color: #999999;
        }
      }
    }
  }
</style>
