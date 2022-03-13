import React, { useState } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './Home.css';
import './Home.css';
import MainLayout from '../components/MainLayout/MainLayout';
import Heard from '../components/Heard/index'
import logo from '../assets/kb_top_logo1.png';


const dataSource = [
  {
    key: '1',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '西湖区湖底公园1号',
    mesLine: '西湖区湖底公园1号',
    mesAfter: '西湖区湖底公园1号',
    time: '2022-03-10 12:00:00',
  },


];

const columns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    align:"center",
    className:'replceClor'
  },
  {
    title: '设备图片',
    dataIndex: 'image',
    key: 'image',
    align:"center",
    className:'replceClor',
    render: (record) => <img src={logo} alt=""  width="170px"  height="auto"/>
  },
  {
    title: '设备状态',
    dataIndex: 'status',
    key: 'status',
    align:"center",
    className:'replceClor'
  },
  {
    title: 'MES链接',
    dataIndex: 'mesLine',
    key: 'mesLine',
    align:"center",
    className:'replceClor'
  },
  {
    title: 'MES后台',
    dataIndex: 'mesAfter',
    key: 'mesAfter',
    align:"center",
    className:'replceClor'
  },
  {
    title: '后台关闭时间',
    dataIndex: 'time',
    key: 'time',
    align:"center",
    className:'replceClor'
  },
]




function Home({ location }) {

  return (
    <div>
      <Heard></Heard>
      <Table dataSource={dataSource} columns={columns} className={styles.TableColor}></Table>
    </div>


  );
}

Home.propTypes = {
};

export default connect()(Home);
