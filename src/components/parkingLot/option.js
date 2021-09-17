export function options(echarts) {
  return {
    xAxis: {
      type: 'category',
      data: ['0','2','4','6','8','10','12','14','16','18','20','22','24'],
      axisTick: { //去掉y轴刻度线
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 'normal',
          color: "#FFFFFF"
        },
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: '#0C6970'
        } // x轴坐标轴颜色
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: "#16808B",
      textStyle: {
        color: 'white',
      },
      borderWidth: 0,
      formatter:function(value){
        var htmls = ''
        value.forEach((item)=>{
          htmls+="<span>2021年"+item.axisValue+"月</span><br/>使用&emsp;"+item.value+"<br/>"
        })
      	return htmls;
      }
    },
    grid: {
      top: 30,
      left: '0%',
      right: '2%',
      bottom: '2.5%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      axisTick: { //去掉y轴刻度线
        show: false,
      },
      axisLine: {
        "show": true,
        lineStyle: {
          color: '#0C6970'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 'normal',
          color: "rgba(255,255,255,0.7)"
        },
      },
    },
    series: [{
      name: '年龄结构占比',
      data: [100,200,300,100,100,200,100,200,300,100,100,200,500],
      type: 'bar',
      itemStyle: {
        color: '#36BCDF'
      },
      barWidth: 20,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#14898F'
          }, {
            offset: 1,
            color: '#65B08D'
          }])
        }
      }
    }]
  };
}
