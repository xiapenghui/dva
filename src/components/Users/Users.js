import React, { useState } from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm, Button, Row, Col, Select, Form, Input } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';
import UserModal from './UserModal';

function mapStateToProps(state) {
  const { list, total, page } = state.Users;
  return {
    loading: state.loading.models.Users,
    list,
    total,
    page,
  };
}


function Users({ dispatch, list: dataSource, loading, total, page: current }) {
  const style = { background: '#0092ff', padding: '8px 0' };

  function deleteHandler(text, values) {
    dispatch({
      type: 'Users/remove',
      payload: { text },
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: '/Users',
      query: { page },
    }));
  }

  function editHandler(values) {
    dispatch({
      type: 'Users/patch',
      payload: { values },
    });
  }

  function createHandler(values) {
    dispatch({
      type: 'Users/create',
      payload: values,
    });
  }





  const columns = [
    {
      title: '部门编号',
      dataIndex: 'departmentno',
      key: 'departmentno',
    },

    {
      title: '部门名称',
      dataIndex: 'departmentname',
      key: 'departmentname',
    },

    {
      title: '部门简称',
      dataIndex: 'departmentshortname',
      key: 'departmentshortname',
    },

    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },




    {
      title: 'Operation',
      key: 'operation',
      render: (text, record) => (
        <span className={styles.operation}>
          <UserModal record={record} onOk={editHandler.bind(record)} title="编辑">
            <a>编辑</a>
          </UserModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(text, record)}>
            <a href="">删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>

        
        <div className={styles.create}>
          <UserModal record={{}} onOk={createHandler}   title="新增" >
            <Button type="primary">新增</Button>
          </UserModal>
        </div>



        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey={record => record.departmentid}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}


export default connect(mapStateToProps)(Users);
