import { configureStore } from "@reduxjs/toolkit";

import paragraphReducer from "../reducers/paragraphSlice.js";
import userReducer from "../reducers/userSlice.js";
import themeReducer from "../reducers/themeSlice.js";
import { apiSlice } from "../api/index.js";

export const store = configureStore({
    reducer: {
        paragraphs: paragraphReducer,
        user: userReducer,
        theme: themeReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

