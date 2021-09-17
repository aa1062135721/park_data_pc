<template>
  <div id="app" @contextmenu="stopRight">
    <DataHome/>
  </div>
</template>

<script>
import DataHome from './pages/dataHome/index.vue'

export default {
  name: 'App',
  components: {
    DataHome
  },
  methods:{
    stopRight(event){
      alert("不要干坏事哦~")
       event.preventDefault();
    }
  }
}
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  margin: 0;
  line-height: 1;
  padding: 0;
  // cursor: url('./assets/image/pointer.png'),auto;
}
.anchorBL{display:none !important;}
body::-webkit-scrollbar {
  display: none !important;; /* Chrome Safari */
  scrollbar-width: none !important;; /* Firefox */
  -ms-overflow-style: none !important;; /* IE 10+ */
  width: 0 !important;
}
</style>
