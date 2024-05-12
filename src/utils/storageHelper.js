import SecureStorage from 'react-secure-storage';


// Helper function to set data
export const setSecureData = (key, value) => {
  SecureStorage.setItem(key, value);
};

// Helper function to get data
export const getSecureData = (key) => {
  return SecureStorage.getItem(key);
};

// Helper function to delete data
export const deleteSecureData = (key) => {
  SecureStorage.removeItem(key);
};
