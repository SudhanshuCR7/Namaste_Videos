import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET_WEB } from "./constants";

const chatSlice = createSlice({
    name:'chat',
    initialState: {
       message: []
    },
    reducers: {
       addMessage: (state, action) => {
        state.message.splice(LIVE_CHAT_OFFSET_WEB,1)
        //    state.message.push(action.payload)
        state.message.unshift(action.payload)
       }
    }
})

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;