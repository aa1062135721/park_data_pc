export function options(echarts) {
  return {
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: { //去掉y轴刻度线
        show: false
      },
      axisLabel: {
        interval:0,
        textStyle: {
          fontSize: 'normal',
          color: "rgba(255,255,255,0.7)"
        }
      },
      axisLine: {
        lineStyle: {
          color: '#33C65E'
        } // x轴坐标轴颜色
      }
    },
    tooltip: {
      trigger: 'axis', //坐标轴触发，可设为 item 数据项图形触发
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'line' // 默认为直线，可选为：'line' | 'shadow'
      },
      backgroundColor: "#16808B",
      textStyle: {
        color: 'white',
      },
      borderWidth: 0,
      formatter:function(value){
        var htmls = ''
        value.forEach((item)=>{
          htmls+="<span style='display: inline-block;margin-right: 10px;'>"+item.seriesName+"</span>"+item.value+"<br/>"
        })
      	return htmls;
      }
    },
    grid: {
      top: 10,
      left: '3%',
      right: '2%',
      bottom: '5.5%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#10284E',
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ['#314D60'],
          type: 'solid'
        }
      },
      axisTick: { //去掉y轴刻度线
        show: false,
      },
      axisLine: {
        "show": false,
      },
      // min: 0,
      // max: 2000,
      axisLabel: {
        textStyle: { //改变刻度字体样式
          color: '#fff'
        }
      }
    },
    series: [{
      name: '重点企业',
      data: [0, 10, 80, 120, 200,2, 10, 80, 120, 200,150,33],
      type: 'line',
      itemStyle: {
        color: '#FACB0F'
      },
      smooth: true,
      areaStyle: { // 颜色自上而下渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
        	offset: 0,
        	color: ' #e8c226'
        }, {
        	offset: 0.9,
        	color: '#242f3e'
        }]),
        opacity: 0.5 // 填充区域透明度
      },
    },
    {
      name: '龙头企业',
      data: [0, 90, 160, 100, 90,200, 10, 80, 160, 160,190,93],
      type: 'line',
      itemStyle: {
        color: '#34D160'
      },
      smooth: true,
      areaStyle: { // 颜色自上而下渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
        	offset: 0,
        	color: '#34d160'
        }, {
        	offset: 0.9,
        	color: '#242f3e'
        }]),
        opacity: 0.5 // 填充区域透明度
      },
    },
    {
      name: '规上企业',
      data: [0, 110, 20, 40, 100,20, 10, 80,20, 210,150,33],
      type: 'line',
      itemStyle: {
        color: '#35C2FF'
      },
      smooth: true,
      areaStyle: { // 颜色自上而下渐变
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{        // 1代表上面
        	offset: 0,
        	color: '#08d1d8'
        }, {
        	offset: 0.9,
        	color: '#242f3e'
        }]),
        opacity: 0.5 // 填充区域透明度
      },
    }]
  }
}
