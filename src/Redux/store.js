import { configureStore } from '@reduxjs/toolkit'
 import loginSlice from './reducer/login.Slice'
// import orderSlice from './reducer/order.Slice'
import orderSlice from './reducer/orderSlice'


 export const store= configureStore({
  devTools:true,
  reducer: {
    isLogin: loginSlice,
    order : orderSlice,
  },
})
