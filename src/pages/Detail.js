import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './Detail.css';
import './Detail.css';
import Heard from '../components/Heard/index'
import * as echarts from 'echarts';
import { Table, Button, Tag } from 'antd';

function Detail({ location }) {

  useEffect(() => {
    myChart1()
    myChart2()
    myChart3()
    myChart4()
  })



  // 基于准备好的dom，初始化echarts实例
  const myChart1 = async () => {
    let myChart1 = echarts.init(document.getElementById('myChart1'));
    // 绘制图表
    myChart1.setOption({
      color: ['#a30707' ],
      title: [{
        text: '修改次数',
        left: 'center',
        y: '20px', //垂
        textStyle: { //主标题文本样式
          fontSize: 25,
          color: "#37CC48",
          fontFamily: 'cursive',
        },
      }],
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      tooltip: {},
      xAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            width: 1, //这里是为了突出显示加上的
          },
          show:true
        },
        data: ["03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20"]
      },
      yAxis: {
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1, //这里是为了突出显示加上的
            },
            show:true
          },
          splitLine: { //网格线
            show: false
          }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 30, 24, 47, 67, 53]
      }]
    });
  }

  

  const myChart2 = async () => {
    let myChart2 = echarts.init(document.getElementById('myChart2'));
    // 绘制图表
    myChart2.setOption({
      color: ['#a30707' ],
      title: [{
        text: '重启次数',
        left: 'center',
        y: '20px', //垂
        textStyle: { //主标题文本样式
          fontSize: 25,
          color: "#37CC48",
          fontFamily: 'cursive',
        },
      }],
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      tooltip: {},
      xAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            width: 1, //这里是为了突出显示加上的
          },
          show:true
        },
        data: ["03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20"]
      },
      yAxis: {
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1, //这里是为了突出显示加上的
            },
            show:true
          },
          splitLine: { //网格线
            show: false
          }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 30, 24, 47, 67, 53]
      }]
    });
  }


  const myChart3 = async () => {
    let myChart3 = echarts.init(document.getElementById('myChart3'));
    // 绘制图表
    myChart3.setOption({
      color: ['#a30707' ],
      title: [{
        text: '断网次数',
        left: 'center',
        y: '20px', //垂
        textStyle: { //主标题文本样式
          fontSize: 25,
          color: "#37CC48",
          fontFamily: 'cursive',
        },
      }],
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      tooltip: {},
      xAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            width: 1, //这里是为了突出显示加上的
          },
          show:true
        },
        data: ["03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20"]
      },
      yAxis: {
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1, //这里是为了突出显示加上的
            },
            show:true
          },
          splitLine: { //网格线
            show: false
          }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 30, 24, 47, 67, 53]
      }]
    });
  }


  const myChart4 = async () => {
    let myChart4 = echarts.init(document.getElementById('myChart4'));
    // 绘制图表
    myChart4.setOption({
      color: ['#a30707' ],
      title: [{
        text: '更新次数',
        left: 'center',
        y: '20px', //垂
        textStyle: { //主标题文本样式
          fontSize: 25,
          color: "#37CC48",
          fontFamily: 'cursive',
        },
      }],
      grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      tooltip: {},
      xAxis: {
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
        },
        axisLine: {
          lineStyle: {
            color: '#fff',
            width: 1, //这里是为了突出显示加上的
          },
          show:true
        },
        data: ["03-10", "03-11", "03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18", "03-19", "03-20"]
      },
      yAxis: {
          type: 'value',
          name: '次数',
          nameTextStyle: {
            color: "#fff",
            fontSize: 12,
          },
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
              width: 1, //这里是为了突出显示加上的
            },
            show:true
          },
          splitLine: { //网格线
            show: false
          }
      },
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20, 30, 24, 47, 67, 53]
      }]
    });
  }




  return (
    <div className={styles.Conter}>
      <Heard></Heard>
      <div className={styles.bigBox}>
        <div className={styles.Detaliecharts} id="myChart1" ></div>
        <div className={styles.Detaliecharts} id="myChart2" ></div>
        <div className={styles.Detaliecharts} id="myChart3" ></div>
        <div className={styles.Detaliecharts} id="myChart4" ></div>

      </div>
    </div>
  );
}


export default connect()(Detail);



