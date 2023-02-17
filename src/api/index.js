import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['Posts', "Products"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: ["Posts"]
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
            invalidatesTags: ["Posts"]
        }),

        getProducts: builder.query({
            query: () => "/products",
            providesTags: ["Products"]
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
            invalidatesTags: ["Products"]
        }),
        deleteProduct: builder.mutation({
            query: (initialProductId) => ({

                url: `/products/${initialProductId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        })
    })
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useGetProductsQuery,
    useGetProductQuery,
    useAddNewProductMutation,
    useDeleteProductMutation
} = apiSlice;