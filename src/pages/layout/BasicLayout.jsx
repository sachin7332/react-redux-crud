import React from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout, theme } from 'antd';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
const { Content } = Layout;

const BasicLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbItems = [
    { breadcrumbName: 'Home' },
    { breadcrumbName: 'List' },
    { breadcrumbName: 'Users' }
  ];
  
  return (
    <Layout>
      <AppHeader />
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          {breadcrumbItems.map(item => (
            <Breadcrumb.Item key={item.breadcrumbName}>
              {item.breadcrumbName}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
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
      <AppFooter />
    </Layout>
  );
};
export default BasicLayout;
