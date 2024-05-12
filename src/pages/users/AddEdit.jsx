import React, { useEffect } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import './AddEdit.css'; // Import CSS for custom styling
import PropTypes from 'prop-types'; // Import PropTypes

const AddEdit = ({ visible, initialValues, onSave, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    //mounting
   form.setFieldsValue(initialValues);
    //unmounting
   return () =>  form.resetFields();

  }, [initialValues, form]);

  const onFinish = (values) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Modal
      title={initialValues ? 'Edit User' : 'Add User'}
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="add-edit-modal"
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
          <Input className="form-control" />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input className="form-control" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input className="form-control" />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Form.Item
            name={['address', 'street']}
            label="Street"
            rules={[{ required: true, message: 'Please enter street' }]}
          >
            <Input className="form-control" />
          </Form.Item>
          <Form.Item name={['address', 'suite']} label="Suite"
          rules={[
            { required: true, message: 'Please enter Suite' },
          ]}>
            <Input className="form-control" />
          </Form.Item>
          <Form.Item name={['address', 'city']} label="City"
          rules={[
            { required: true, message: 'Please enter City Name' },
          ]}>
            <Input className="form-control" />
          </Form.Item>
          <Form.Item name={['address', 'zipcode']} label="Zipcode"
          rules={[
            { required: true, message: 'Please enter Zipcode' },
          ]}>
            <Input className="form-control" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please enter phone number' }]}
        >
          <Input className="form-control" />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            { required: true, message: 'Please enter website' },
          ]}
        >
          <Input className="form-control" />
        </Form.Item>
        <Form.Item label="Company" name="company">
          <Form.Item
            name={['company', 'name']}
            label="Name"
            rules={[{ required: true, message: 'Please enter company name' }]}
            
          >
            <Input className="form-control" />
          </Form.Item>
          <Form.Item name={['company', 'catchPhrase']} label="Catch Phrase"
          rules={[
            { required: true, message: 'Please enter Catch Phrase' },
          ]}>
            <Input className="form-control" />
          </Form.Item>
          <Form.Item name={['company', 'bs']} label="Business" 
           rules={[
            { required: true, message: 'Please enter Business Name' },
          ]}>
            <Input className="form-control" />
          </Form.Item>
        </Form.Item>
        <Form.Item className="button-group" style={{ marginTop: '20px' }}>
          <Button type="primary" htmlType="submit" className="btn btn-primary">Save</Button>
          <Button className="btn btn-secondary cancel-btn" onClick={onCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

// Define propTypes
AddEdit.propTypes = {
  visible: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default React.memo(AddEdit);
