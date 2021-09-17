export function options(data) {
  return {
    radar: {
      indicator:data.indicator,
      name: {
        textStyle: {
          color: 'white'
        }
      },
      center: ['50%', '50%'], // 图的位置
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: ['#1B626E']
          // 图表背景网格线的颜色
        }
      },
      axisLine: {
        lineStyle: {
          color: '#1B626E',
        },
      },
      splitArea: {
        show: false
      },
    },
    tooltip: {
      trigger: "item",
      backgroundColor: "#16808B",
      textStyle: {
        color: 'white',
      },
      borderWidth: 0,
    },
    series: [{
      name:data.one.title,
      type: 'radar',
      areaStyle: {
        normal: {
          color: '#206C77',
        },
        opacity: 0.5 // 填充区域透明度
      },
      itemStyle: {
        color: '#1DA9AF'
      },
      data: [{
        value:data.one.data,
        name: data.one.title
      }]
    },
    {
      name: data.two.title,
      type: 'radar',
      areaStyle: {
        normal: {
          color: '#907D2F',
        },
        opacity: 0.5 // 填充区域透明度
      },
      itemStyle: {
        color: '#E5BA23'
      },
      data: [{
        value: data.two.data,
        name: data.two.title
      }]
    }]
  };
}
