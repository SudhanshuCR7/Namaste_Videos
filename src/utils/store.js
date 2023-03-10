import {configureStore} from "@reduxjs/toolkit";
import chatSlice from "./chatSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer: {
       menu: menuSlice,
       chat: chatSlice
    }
});

export default store;
