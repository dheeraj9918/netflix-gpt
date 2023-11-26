import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'user',
    initialState: null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(state,action)=>{
            return state;
        },
    }
});

export const {addUser, removeUser} =appSlice.actions;

export default appSlice.reducer;