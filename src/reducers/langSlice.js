import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "fa",
};


const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        langSeted: (state, action) => {
            state.lang = action.payload;
            localStorage.setItem("lang", action.payload);
        }
    },

});

export const selectLang = state => state.lang.lang;
export const { langSeted } = langSlice.actions;

export default langSlice.reducer;
