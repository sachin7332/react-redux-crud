import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import loaderSlice from './features/loaderSlice'
import userSlice from './features/userSlice'

//configure store
const store = configureStore({
  reducer: {
    auth : authSlice,
    users : userSlice,
    loader: loaderSlice,
    
  },
  
})

export default store