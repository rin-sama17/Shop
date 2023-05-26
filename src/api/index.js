import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",

        }),
        getPost: builder.query({
            query: (initialPostId) => `/posts/${initialPostId}`,
        }),




        getProducts: builder.query({
            query: () => "/products",

        }),
        getProduct: builder.query({
            query: (initialProductId) => `/products/${initialProductId}`,
        }),




        getSliders: builder.query({
            query: () => '/sliders',

        }),



        getCategories: builder.query({
            query: () => "/categories",

        }),
        getCategory: builder.query({
            query: (initialCategoryId) => `/categories/${initialCategoryId}`,
        }),




        getContracts: builder.query({
            query: () => "/contracts",

        }),
        getContract: builder.query({
            query: (contractId) => `/contracts/${contractId}`,
        }),


    })
});

export const {
    useGetSlidersQuery,


    useGetPostsQuery,
    useGetPostQuery,


    useGetProductsQuery,
    useGetProductQuery,


    useGetCategoriesQuery,
    useGetCategoryQuery,


    useGetContractsQuery,
    useGetContractQuery,
} = apiSlice;

