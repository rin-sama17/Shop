import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['Posts', "Products", "Slider"],
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
        }),
        getCart: builder.query({
            query: (initialCartId) => `/carts/${initialCartId}`
        }),
        addNewCart: builder.mutation({
            query: (initialCart) => ({
                url: "/carts",
                method: "POST",
                body: initialCart
            })
        }),
        getSliders: builder.query({
            query: () => '/sliders',
            providesTags: ["Slider"]
        }),
        getSlider: builder.query({
            query: (initialSliderId) => `/sliders/${initialSliderId}`
        }),
        addNewSlider: builder.mutation({
            query: (initialSlider) => ({
                url: "/sliders",
                method: "POST",
                body: initialSlider
            }),
            invalidatesTags: ["Slider"]
        }),
        deleteSlider: builder.mutation({
            query: (initialSliderId) => ({
                url: `/sliders/${initialSliderId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Slider"]
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
    useDeleteProductMutation,
    useGetCartQuery,
    useAddNewCartMutation,
    useGetSlidersQuery,
    useGetSliderQuery,
    useAddNewSliderMutation,
    useDeleteSliderMutation
} = apiSlice;