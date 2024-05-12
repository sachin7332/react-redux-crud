
import React from 'react';
import { Spin } from 'antd';

const GlobalLoader = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, display: 'flex' , justifyContent: 'center', alignItems: 'center', background: 'rgba(0, 0, 0, 0.5)', zIndex: 9999 }}>
      <Spin size="large" />
    </div>
  );
}

export default GlobalLoader;