import React, { useState } from 'react';
import { connect } from 'dva';
import { Table, Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Home.css';
import './Home.css';
import Heard from '../components/Heard/index';
import logo from '../assets/kb_top_logo1.png';


const dataSource = [
  {
    key: '1',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',

  },
  {
    key: '2',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '3',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '2',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '4',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '5',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '2',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '6',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '2',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '7',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '1',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '8',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '9',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '10',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '2',
    mesLine: '2',
    mesAfter: '1',
    time: '2022-03-10 12:00:00',
  },


];

const columns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    align: "center",
    className: 'replceClor'
  },
  {
    title: '设备图片',
    dataIndex: 'image',
    key: 'image',
    align: "center",
    className: 'replceClor',
    render: (record) => <img src={logo} alt="" width="170px" height="auto" />
  },
  {
    title: '设备状态',
    dataIndex: 'status',
    key: 'status',
    align: "center",
    className: 'replceClor',
    render: (text, record) => {
      if (text == 1) {
        return <Button type="primary" shape="circle" size="small"/>
      } else if (text == 2) {
        return <Button type="danger" shape="circle" size="small"/>
      }
    }

  },
  {
    title: 'MES链接',
    dataIndex: 'mesLine',
    key: 'mesLine',
    align: "center",
    className: 'replceClor',
    render: (text, record) => {
      if (text == 1) {
        return <Button type="primary" shape="circle" size="small"/>
      } else if (text == 2) {
        return <Button type="danger" shape="circle" size="small"/>
      }
    }
  },
  {
    title: 'MES后台',
    dataIndex: 'mesAfter',
    key: 'mesAfter',
    align: "center",
    className: 'replceClor',
    render: (text, record) => {
      if (text == 1) {
        return <Button type="primary" shape="circle" size="small"/>
      } else if (text == 2) {
        return <Button type="danger" shape="circle" size="small"/>
      }
    }
  },
  {
    title: '后台关闭时间',
    dataIndex: 'time',
    key: 'time',
    align: "center",
    className: 'replceClor'
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
