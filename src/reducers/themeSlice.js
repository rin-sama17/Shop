import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    secondary: '#ce93d8'

};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {},
});

export const getTheme = state => state.theme;

export default themeSlice.reducer;