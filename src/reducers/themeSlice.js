import { createSlice } from '@reduxjs/toolkit';


const secondary = localStorage.getItem("secondary") ? localStorage.getItem("secondary") : '#ce93d8';
const initialState = {
    secondary
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        secondaryChanged: (state, action) => {
            state.secondary = action.payload;
            localStorage.setItem("secondary", action.payload);
        }
    },
});

export const getSecondary = state => state.theme.secondary;
export const { secondaryChanged } = themeSlice.actions;
export default themeSlice.reducer;