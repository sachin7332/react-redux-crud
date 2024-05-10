import React from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, theme } from 'antd';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
const {  Content } = Layout;

const BasicLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbItems = [
    { path: '/', breadcrumbName: 'Home' },
    { path: '/list', breadcrumbName: 'List' },
    { path: '/app', breadcrumbName: 'App' }
  ];
  return (
    <Layout>
<AppHeader/>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
          <Breadcrumb
          style={{
            margin: '16px 0',
          }}
          items={breadcrumbItems}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
         <Outlet />
        </div>
      </Content>
     <AppFooter/>
    </Layout>
  );
};
export default BasicLayout;