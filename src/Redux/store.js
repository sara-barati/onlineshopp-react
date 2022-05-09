import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
export default configureStore({
  devTools: true,
  reducer: {
    user:userReducer
  }
})