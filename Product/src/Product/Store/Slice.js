import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    focused : 0
}

const focusedSlice = createSlice({
    name : "Slice" , 
    initialState ,
    reducers : {
        focused : (state , action)=>{
            return {
                ...state ,
                focused : action.payload
            }
        }
    }
}) 

export default focusedSlice.reducer
export const {focused} = focusedSlice.actions