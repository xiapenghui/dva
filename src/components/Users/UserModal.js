import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      title:''
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {departmentid , departmentno, departmentname, departmentshortname } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

     
    return (
      <span>
        <span onClick={this.showModelHandler}>
          {children}
        </span>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >


          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              style={{display:"none"}}
              {...formItemLayout}
              label="id"
            >
              {
                getFieldDecorator('departmentid', {
                  initialValue: departmentid,
                })(<Input />)
              }
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="部门编号"
            >
              {
                getFieldDecorator('departmentno', {
                  initialValue: departmentno,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="部门名称"
            >
              {
                getFieldDecorator('departmentname', {
                  initialValue: departmentname,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="部门简称"
            >
              {
                getFieldDecorator('departmentshortname', {
                  initialValue: departmentshortname,
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
