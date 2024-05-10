import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const AddEdit = ({ visible, initialValues, onSave, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const onFinish = (values) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Modal
      title={initialValues ? 'Edit User' : 'Add User'}
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item
          label="ID"
          name="id"
          hidden={true}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Form.Item
            name={['address', 'street']}
            label="Street"
            rules={[{ required: true, message: 'Please enter street' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'suite']} label="Suite">
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'city']} label="City">
            <Input />
          </Form.Item>
          <Form.Item name={['address', 'zipcode']} label="Zipcode">
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please enter phone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            { required: true, message: 'Please enter website' },
            { type: 'url', message: 'Please enter a valid URL' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Company" name="company">
          <Form.Item
            name={['company', 'name']}
            label="Name"
            rules={[{ required: true, message: 'Please enter company name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['company', 'catchPhrase']} label="Catch Phrase">
            <Input />
          </Form.Item>
          <Form.Item name={['company', 'bs']} label="Business">
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Save</Button>
          <Button style={{ marginLeft: '10px' }} onClick={onCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddEdit;
