import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    setOrder: (state,action) => {
    //   state.order=action.payload
    return action.payload
    },
    updateOrder:(state,action)=>{
        return{...state,...action.payload}
    }

  },
})
export const { setOrder, updateOrder } = orderSlice.actions
export default orderSlice.reducer