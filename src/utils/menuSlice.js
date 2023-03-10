import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
           state.isOpen = ! state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false
        }
    }
})

export default menuSlice.reducer;
export const {toggleMenu , closeMenu} = menuSlice.actions;