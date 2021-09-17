<template>
  <div class="boxTitle">
     <div></div>
     <span>{{title}}</span>
  </div>
</template>

<script>
  export default{
    props:['title']
  }
</script>

<style scoped="scoped" lang="scss">
 $color:#1DA9AF;
.boxTitle{
  display: flex;
  align-items: center;
  >div{
    width: 0.02rem;
    height: 0.16rem;
    background-color: #1DA9AF;
    margin-right: 0.1rem;
  }
  >span{
    font-size: 0.16rem;
    color: $color;
  }
}

</style>
