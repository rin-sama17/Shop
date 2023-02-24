import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ['Posts', "Products", "Discounts", "Carts", "Slider", "Categorys"],
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
        deletePost: builder.mutation({
            query: (initialPostId) => ({
                url: `/posts/${initialPostId}`,
                method: "DELETE"
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


        getCarts: builder.query({
            query: () => `/carts`
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
        }),


        getDiscounts: builder.query({
            query: () => '/discounts',
            providesTags: ["Discounts"]
        }),
        getDiscount: builder.query({
            query: (initialDiscountId) => `/discount/${initialDiscountId}`
        }),
        addNewDiscount: builder.mutation({
            query: (initialDiscount) => ({
                url: '/discounts',
                method: "POST",
                body: initialDiscount,
            }),
            invalidatesTags: ["Discounts"]
        }),
        deleteDiscount: builder.mutation({
            query: (initialDiscountId) => ({
                url: `/discount/${initialDiscountId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Discounts"]
        }),


        getCategorys: builder.query({
            query: () => "/categorys",
            providesTags: ["Categorys"]
        }),
        getCategory: builder.query({
            query: (initialCategoryId) => `/categorys/${initialCategoryId}`
        }),
        addNewCategory: builder.mutation({
            query: (initialCategory) => ({
                url: "/categorys",
                method: "POST",
                body: initialCategory
            }),
            invalidatesTags: ["Categorys"]
        }),
        deleteCategory: builder.mutation({
            query: (initialCategoryId) => ({
                url: `/categorys/${initialCategoryId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Categorys"]
        })

    })
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useDeletePostMutation,

    useGetProductsQuery,
    useGetProductQuery,
    useAddNewProductMutation,
    useDeleteProductMutation,

    useGetCartsQuery,
    useGetCartQuery,
    useAddNewCartMutation,

    useGetSlidersQuery,
    useGetSliderQuery,
    useAddNewSliderMutation,
    useDeleteSliderMutation,

    useGetDiscountsQuery,
    useGetDiscountQuery,
    useAddNewDiscountMutation,
    useDeleteDiscountMutation,

    useGetCategorysQuery,
    useGetCategoryQuery,
    useAddNewCategoryMutation,
    useDeleteCategoryMutation
} = apiSlice;