import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'

//configure store
const store = configureStore({
  reducer: {
    auth : authSlice
    
  }
})

export default store