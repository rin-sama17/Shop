import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['BLOG', "PRODUCT"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ["BLOG"]
        }),
        getPost: builder.query({
            query: (initialPostId) => `/posts/${initialPostId}`
        }),
        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: "/posts",
                method: "POST",
                body: initialPost
            }),
            invalidatesTags: ["BLOG"]
        }),

        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["PRODUCT"]
        }),
        getProduct: builder.query({
            query: (initialProductId) => `/products/${initialProductId}`
        }),
        addNewProduct: builder.mutation({
            query: (initialProduct) => ({
                url: "/products",
                method: "POST",
                body: initialProduct
            }),
            invalidatesTags: ["PRODUCT"]
        })
    })
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useGetProductsQuery,
    useGetProductQuery,
    useAddNewProductMutation
} = apiSlice;