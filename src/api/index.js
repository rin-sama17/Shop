import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/admin' }),
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
      providesTags: (res = [], error, arg) => [
        'Sliders',
        ...res.map(({ id }) => [{ type: 'Sliders', id }]),
      ],
    }),
    getSlider: builder.query({
      query: (id) => `/sliders/show/${id}`,
      providesTags: (res, err, arg) => [{ type: 'Sliders', id: arg }],
    }),
    addNewSlider: builder.mutation({
      query: (slider) => ({
        url: '/admin/sliders/store',
        method: 'POST',
        body: slider,
      }),
      invalidatesTags: ['Sliders'],
    }),
    deleteSlider: builder.mutation({
      query: (initialSliderId) => ({
        url: `/admin/sliders/delete/${initialSliderId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Sliders'],
    }),



    getCategories: builder.query({
      query: () => `/admin/categories`,
    }),
    getCategory: builder.query({
      query: (id) => `/categories/show/${id}`,
    }),

    getContracts: builder.query({
      query: () => `/agencies`,
    }),
    getContract: builder.query({
      query: (id) => `/admin/agencies/show/${id}`,
    }),

  }),
});

export const {

  useGetPostsQuery,
  useGetPostQuery,


  useGetProductsQuery,
  useGetProductQuery,

  useGetSlidersQuery,
  useGetSliderQuery,
  useAddNewSliderMutation,
  useDeleteSliderMutation,
  useEditSliderMutation,

  useGetDiscountsQuery,
  useGetDiscountQuery,

  useGetCategoriesQuery,
  useGetCategoryQuery,


  useGetPremissionsQuery,
  useGetPremissionQuery,


  useGetContractsQuery,
  useGetContractQuery,

} = apiSlice;