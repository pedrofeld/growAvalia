import {createSlice } from "@reduxjs/toolkit";

const initialState = "light";

const themesSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => (state === "light" ? "dark" : "light")
    }
});

export const {toggleTheme} = themesSlice.actions;
export default themesSlice.reducer;