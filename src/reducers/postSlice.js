import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
    state: "idel",
    error: ""
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
});

export const getAllPosts = state => state.posts.posts;

export default postSlice.reducer;