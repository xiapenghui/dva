import React, { useState } from 'react';
import { connect } from 'dva';
import { Table, Button, Tag } from 'antd';
import styles from './Equipment.css';
import './Equipment.css';
import Heard from '../components/Heard/index'



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
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '3',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
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
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '6',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '7',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
  {
    key: '8',
    name: 'NE-WS09000 T5 梅兰日标签移门',
    image: 32,
    status: '1',
    mesLine: '2',
    mesAfter: '2',
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
    status: '1',
    mesLine: '2',
    mesAfter: '2',
    time: '2022-03-10 12:00:00',
  },
 
];

const columns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    align: "center",
    ellipsis: true,
    className: 'replceClor',
    width:300
  },
  {
    title: '设备状态',
    dataIndex: 'status',
    key: 'status',
    align: "center",
    ellipsis: true,
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
    ellipsis: true,
    className: 'replceClor',
    render: (text, record) => {
      if (text == 1) {
        return <Button type="primary" shape="circle" size="small"/>
      } else if (text == 2) {
        return <Button type="danger" shape="circle" size="small"/>
      }
    }
  }
]




function Equipment({ location }) {

  return (
    <div className={styles.Conter}>
      <Heard></Heard>
      <div className={styles.bigBox}>
        <div className={styles.common}>
          <div className={styles.titleHeader}>
            <Button type="primary">重启  <span class={styles.FontColor}>50</span> 次</Button>
            <Table dataSource={dataSource}
              columns={columns}
              className={styles.TableColor} pagination={false}>
            </Table>
          </div>

        </div>
        <div className={styles.common}>
          <div className={styles.titleHeader}>
            <Button type="primary">修改  <span class={styles.FontColor}>50</span> 次</Button>
            <Table dataSource={dataSource}
              columns={columns}
              className={styles.TableColor}
              pagination={false}
            ></Table>
          </div>
        </div>
        <div className={styles.common}>
          <div className={styles.titleHeader}>
            <Button type="primary">删除  <span class={styles.FontColor}>50</span> 次</Button>
            <Table dataSource={dataSource}
              columns={columns}
              className={styles.TableColor}
              pagination={false}
            ></Table>

          </div>
        </div>
      </div>

    </div>


  );
}

Equipment.propTypes = {
};

export default connect()(Equipment);
