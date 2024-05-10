import React from 'react';
import { Form, Input, Button } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import './LoginPage.css'; 
import {  useDispatch } from 'react-redux'
import {  useNavigate } from "react-router-dom";
import { login } from 'store/features/authSlice';
import { setSecureData } from 'utils/storageHelper';
import { StorageConstant } from 'constants/CommonConstants';


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const initialValues = {
    email: 'admin@gmail.com', // Initial value for the email field
    password: 'admin@123', // Password field is left empty
  };

  const onSubmit = (values) => {
         navigate("/users", { replace: true });
         dispatch(login(values))
         setSecureData(StorageConstant.isAuthenticated , "true" )
         setSecureData(StorageConstant.User , JSON.stringify(values) )

  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialValues} // Set initial values here
            onFinish={onSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your Email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
         

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
