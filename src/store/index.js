import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../reducers/productSlice.js";
import paragraphReducer from "../reducers/paragraphSlice.js";
import userReducer from "../reducers/userSlice.js";
import themeReducer from "../reducers/themeSlice.js";
import commentReducer from "../reducers/commentSlice.js";
import cartReducer from "../reducers/cartSlice.js";
import { apiSlice } from "../api/index.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        paragraphs: paragraphReducer,
        user: userReducer,
        theme: themeReducer,
        comments: commentReducer,
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

