import { createSlice } from "@reduxjs/toolkit";
import { bool } from "yup";
const userSlice=createSlice({
    name:"user",
    initialState:false,
    reducers:{
        addUser:(state,action)=>{
         return action.payload
        }
        
    }

})
export const {addUser}=userSlice.actions
export default userSlice.reducer

