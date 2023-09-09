import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  tagTypes: ["Sliders"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `/posts`,
    }),
    getPost: builder.query({
      query: (id) => `/posts/show/${id}`,
    }),


    getProducts: builder.query({
      query: () => `/products`,
    }),
    getProduct: builder.query({
      query: (id) => `/products/show/${id}`,
    }),


    getSliders: builder.query({
      query: () => `/sliders`,
    }),
    getSlider: builder.query({
      query: (id) => `/sliders/show/${id}`,
    }),




    getCategories: builder.query({
      query: () => `/categories`,
    }),
    getCategory: builder.query({
      query: (id) => `/categories/show/${id}`,
    }),


    getAgencies: builder.query({
      query: () => `/agencies`,
    }),
    getAgency: builder.query({
      query: (id) => `/agencies/show/${id}`,
    }),

    getAuthor: builder.query({
      query: (id) => `/users/show/${id}`
    })
  }),
});

export const {

  useGetPostsQuery,
  useGetPostQuery,


  useGetProductsQuery,
  useGetProductQuery,

  useGetSlidersQuery,
  useGetSliderQuery,


  useGetDiscountsQuery,
  useGetDiscountQuery,

  useGetCategoriesQuery,
  useGetCategoryQuery,


  useGetPremissionsQuery,
  useGetPremissionQuery,


  useGetAgenciesQuery,
  useGetAgencyQuery,


  useGetAuthorQuery
} = apiSlice;