import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:'chat',
    initialState: {
       message: []
    },
    reducers: {
       addMessage: (state, action) => {
           state.message.push(action.payload)
       }
    }
})

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;