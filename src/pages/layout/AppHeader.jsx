import React from 'react';
import { Layout, Button, message } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { logout } from 'store/features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteSecureData, getSecureData } from 'utils/storageHelper';
import { StorageConstant } from 'constants/CommonConstants';

const { Header } = Layout;

const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const userFromStorage = getSecureData(StorageConstant.User);
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  const onLogout = () => {
    try {
      deleteSecureData(StorageConstant.isAuthenticated);
      deleteSecureData(StorageConstant.User);
      dispatch(logout());
      navigate("/login", { replace: true });
    } catch (error) {
      message.error("Failed to logout. Please try again.");
      console.error("Error logging out:", error);
    }
  };

  return (
    <Header style={{ backgroundColor: '#001529', display: 'flex', justifyContent: 'space-between' }}>
      <div className="logo" style={{ color: 'white', fontSize: '20px' }}>
        React Redux CRUD
      </div>
      {user && (
        <div>
          <span style={{ color: 'white', marginRight: '10px' }}>
            <UserOutlined /> {user.email}
          </span>
          <Button type="text" icon={<LogoutOutlined />} onClick={onLogout} style={{ color: 'white' }}>
            Logout
          </Button>
        </div>
      )}
    </Header>
  );
};

export default AppHeader;
