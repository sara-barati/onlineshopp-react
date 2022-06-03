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
        return {...state,...action.payload}
    },
    deletOrder:(state)=>{
      return {};
    }


  },
})
export const { setOrder, updateOrder,deletOrder } = orderSlice.actions
export default orderSlice.reducer