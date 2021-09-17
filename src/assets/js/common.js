export default {
  getTime(){
     var time = new Date;//获取中国标准时间 
     var Year = time.getFullYear();//获取当前年份
     var Month = time.getMonth() + 1;//获取当前月份(＋1是因为js中月份是从0开始的)
     var Day = time.getDate();//获取当前几号
     var W = time.getDay();//获取当前星期几
     var week = ['零', "一", "二", "三", "四", "五", "六", "日"];//一般星期几都是用汉字写的,这里转换一下汉字
     var hour = time.getHours(); //获取系统时
     var minute = time.getMinutes(); //获取系统分
     var second = time.getSeconds(); //获取系统秒
     return{
       date:Year+"年"+Month+"月"+Day+"日",
       week: "周"+week[W],
       time: hour + ':' + minute
     }
  }
}
