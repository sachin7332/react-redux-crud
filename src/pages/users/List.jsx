import React, { useEffect, useState } from 'react';
import { Table, Button, message ,Popconfirm } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from 'store/features/userSlice';
import UserAddEditForm from './AddEdit';
import './List.css'; // Import CSS for custom styling

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const globalLoading = useSelector(state => state.loader.loading);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (record) => {
    setSelectedUser(record);
    setIsModalVisible(true);
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId))
      .then(() => {
        message.success('User deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        message.error('Failed to delete user');
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleSave = (values) => {
    if (selectedUser) {
      dispatch(updateUser({ userId: selectedUser.id, userData: values }))
        .then(() => {
          message.success('User updated successfully');
          setIsModalVisible(false);
        })
        .catch(error => {
          console.error('Error updating user:', error);
          message.error('Failed to update user');
        });
    } else {
      dispatch(addUser(values))
        .then(() => {
          message.success('User added successfully');
          setIsModalVisible(false);
        })
        .catch(error => {
          console.error('Error adding user:', error);
          message.error('Failed to add user');
        });
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span>#{text}</span> // Display ID with a '#' prefix
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'City with Zip Code',
      key: 'cityWithZip',
      render: (text, record) => <span>{record.address.city} ({record.address.zipcode})</span> // Display city with zip code
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>{' '}
          <Popconfirm
            title="Are you sure delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>User Management</h2>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>Add User</Button>
      </div>
      <div className="list-content">
        <Table
          columns={columns}
          dataSource={users}
          loading={globalLoading}
          pagination={true}
          rowKey="id"
          style={{ marginTop: 20 }}
        />
      </div>
      <UserAddEditForm
        visible={isModalVisible}
        initialValues={selectedUser}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default List;
