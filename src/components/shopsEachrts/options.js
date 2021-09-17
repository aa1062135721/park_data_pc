export function options(initData) {
  return {
    title: {
      text: "10%",
      x: "center",
      y: "center",
      textStyle: {
        fontSize: 20,
        color: "#fff",
        lineHeight: 20
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: "#16808B",
      textStyle: {
        color: 'white',
      },
      borderWidth: 0,
    },
    series: [{
      name: '访问来源',
      type: 'pie',
      radius: ['60%', '93%'],
      center: ["50%", "50%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [{
          value: 100 - 47,
          name: '无数据',
          itemStyle: {
            color: "#11253D"
          }
        },
        {
          value: 47,
          name: initData.name,
          itemStyle: {
            normal: {
              color: initData.color
            }
          }
        }
      ]
    }]
  }
}
