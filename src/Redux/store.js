import { configureStore } from '@reduxjs/toolkit'
 import loginSlice from './reducer/login.Slice'
// import orderSlice from './orderSlice'


 export const store= configureStore({
  reducer: {
    isLogin: loginSlice,
    // order:orderSlice,
  },
})
