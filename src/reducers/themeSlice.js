import { createSlice } from '@reduxjs/toolkit';

const secondary = localStorage.getItem("secondary") ? localStorage.getItem("secondary") : '#ce93d8';
const font = localStorage.getItem("font") ? localStorage.getItem("font") : "tanha";

const initialState = {
    secondary,
    themeMode: 'dark',
    font
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        secondaryChanged: (state, action) => {
            state.secondary = action.payload;
            localStorage.setItem("secondary", action.payload);
        },
        themeModeChanged: (state, action) => {
            state.themeMode = action.payload;
        },
        fontChanged: (state, action) => {
            state.font = action.payload;
            localStorage.setItem("font", action.payload);
        },
    },
});

export const getSecondary = state => state.theme.secondary;
export const getThemeMode = state => state.theme.themeMode;
export const getFont = state => state.theme.font;

export const { secondaryChanged, themeModeChanged, fontChanged } = themeSlice.actions;
export default themeSlice.reducer;