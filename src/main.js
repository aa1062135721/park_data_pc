// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import fullscreen from 'vue-fullscreen';              //某个元素全屏
Vue.use(fullscreen)
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
import Common from "./assets/js/common.js"; //公共js
import bus from "./assets/js/bus.js"; //公共bus
Vue.prototype.$commonJs = Common; //公共js放原型上
Vue.prototype.$bus = bus; //公共bus放原型上

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
