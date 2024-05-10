import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import userSlice from './features/userSlice'

//configure store
const store = configureStore({
  reducer: {
    auth : authSlice,
    users : userSlice
    
  }
})

export default store