import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'isLogin',
  initialState: {
    isLogin : false,
  },
  reducers: {
    setLogin: (state,action) => {
      state.isLogin=action.payload
    },
  },
})
export const { setLogin } = loginSlice.actions
export default loginSlice.reducer