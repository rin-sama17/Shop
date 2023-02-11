import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../reducers/productSlice.js";
import postReducer from "../reducers/postSlice.js";
import userReducer from "../reducers/userSlice.js";
import themeReducer from "../reducers/themeSlice.js";
import commentReducer from "../reducers/commentSlice.js";
import { apiSlice } from "../api/index.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        posts: postReducer,
        user: userReducer,
        theme: themeReducer,
        comments: commentReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

