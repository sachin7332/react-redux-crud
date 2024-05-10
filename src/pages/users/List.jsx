// List.js
import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, addUser, updateUser, deleteUser } from 'store/features/userSlice';
import UserAddEditForm from './AddEdit';

const List = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const loading = useSelector(state => state.users.loading);
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
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)}>Edit</Button>{' '}
          <Button type="danger" onClick={() => handleDelete(record.id)}>Delete</Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>Add User</Button>
      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        pagination={false}
        rowKey="id"
        style={{ marginTop: 20 }}
      />
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
