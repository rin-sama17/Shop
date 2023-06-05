import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../reducers/categorySlice";
import userReducer from "../reducers/userSlice";
import { apiSlice } from "../api/index";
export const store = configureStore({
    reducer: {
        category: categoryReducer,
        user: userReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});
