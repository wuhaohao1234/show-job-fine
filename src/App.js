import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Button, Checkbox, Form, Input, Tag } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useState } from 'react';
import './App.less';

const IconText = ({ icon, text }: { icon: any; text: string }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

function App() {
  const [dataSource, setDataSource] = useState([])
  const [form] = useForm()
  const options = [
    {label: '18-35岁', value: '18-35岁'},
    {label: '5000-7000', value: '5000-7000'},
    {label: '男性', value: '男性'},
  ]
  const onFinish = (values) => {
    console.log(values);
    const item = {
      title: values.name,
      desc: values.desc,
      id: dataSource.length,
      tags: values.tags
    }
    const arr = [...dataSource]
    arr.push(item)
    setDataSource(arr)
    form.resetFields()
  };
  

  return (
    <div className="App">
      <ProList
        style={{ width: '390px', border: '1px solid #ccc' }}
        itemLayout="vertical"
        rowKey="id"
        dataSource={dataSource}
        metas={{
          title: {},
          description: {
            dataIndex: 'tags',
            render: tags => (
              <>
                {tags.map((tag, key) => <Tag key={key}>{tag}</Tag>)}
              </>
            ),
          },
          actions: {
            render: () => [
              <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
              <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
              <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ],
          },
          content: {
            dataIndex: 'desc',
            render: desc => {
              return (
                <div>
                  {desc}
                </div>
              );
            },
          },
        }}
      />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
        style={{width: '390px', margin: '20px'}}
      >
        <Form.Item
          label="工厂名称"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入工厂名称',
            },
          ]}
        >
          <Input placeholder='请输入工厂名称' />
        </Form.Item>

        <Form.Item
          label="工作描述"
          name="desc"
          rules={[
            {
              required: true,
              message: '请输入工作描述',
            },
          ]}
        >
          <Input placeholder='请输入工作描述' />
        </Form.Item>
        <Form.Item
          label="标签" 
          name="tags"
          rules={[
            {
              required: true,
            }
          ]}
        >
          <Checkbox.Group options={options} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            添加
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
