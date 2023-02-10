import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../reducers/productSlice.js";
import postReducer from "../reducers/postSlice.js";
import userReducer from "../reducers/userSlice.js";
import themeReducer from "../reducers/themeSlice.js";
import commentReducer from "../reducers/commentSlice.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        posts: postReducer,
        user: userReducer,
        theme: themeReducer,
        comments: commentReducer,
    },
});

