import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const myMiddleware = (next) => (args) => {
  if (!args.headers) {
    args.headers = {};
  }

  args.headers['Accept'] = 'application/json';
  return next(args);
};



export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  prepareHeaders: (headers) => {
    headers.set("Accept", 'application/json');
    return headers;
  },
  tagTypes: [
    'Blogs',
    'Products',
    'Discounts',
    'Carts',
    'Sliders',
    'Categorys',
    'Admins',
    'Roles',
    'Premission',
    'Contracts',
  ],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: ({ prefix = "" }) => `${prefix}/posts`,
      providesTags: (res = []) => [
        'Blogs',
        ...res.data?.map(({ id }) => [{ type: 'Blogs', id }]),
      ],
    }),
    getPost: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/posts/show/${id}`,
      providesTags: (res, err, arg) => [{ type: 'Blogs', id: arg }],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: '/admin/posts/store',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Blogs'],
    }),
    deletePost: builder.mutation({
      query: (initialPostId) => ({
        url: `/admin/posts/delete/${initialPostId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Blogs'],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/admin/posts/update/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Blogs', id: arg.id }],
    }),

    getProducts: builder.query({
      query: ({ prefix = "" }) => `${prefix}/products`,
      providesTags: ['Products'],
    }),
    getProduct: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/products/show/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (initialProduct) => ({
        url: '/admin/products/store',
        method: 'POST',
        body: initialProduct,
      }),
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query: (initialProductId) => ({
        url: `/admin/products/delete/${initialProductId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),
    editProduct: builder.mutation({
      query: (product) => ({
        url: `/admin/products/update/${product.id}`,
        method: 'PUT',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),

    getSliders: builder.query({
      query: ({ prefix = "" }) => `${prefix}/sliders`,
      providesTags: (res = [], error, arg) => [
        'Sliders',
        ...res.map(({ id }) => [{ type: 'Sliders', id }]),
      ],
    }),
    getSlider: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/sliders/show/${id}`,
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
    editSlider: builder.mutation({
      query: (slider) => ({
        url: `/admin/sliders/update/${slider.id}`,
        method: 'PUT',
        body: slider,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Sliders', id: arg.id }],
    }),

    getDiscounts: builder.query({
      query: ({ prefix = "" }) => `${prefix}/discounts`,
      providesTags: (res = [], err, arg) => [
        'Discounts',
        ...res.map(({ id }) => [{ type: 'Discounts', id }]),
      ],
    }),
    getDiscount: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/discounts/show/${id}`,
      providesTags: (res, err, arg) => [{ type: 'Discounts', id: arg }],
    }),
    addNewDiscount: builder.mutation({
      query: (initialDiscount) => ({
        url: '/admin/discounts/store',
        method: 'POST',
        body: initialDiscount,
      }),
      invalidatesTags: ['Discounts'],
    }),
    deleteDiscount: builder.mutation({
      query: (initialDiscountId) => ({
        url: `/admin/discounts/delete/${initialDiscountId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Discounts'],
    }),
    editDiscount: builder.mutation({
      query: (discount) => ({
        url: `/admin/discounts/update/${discount.id}`,
        method: 'PUT',
        body: discount,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Discounts', id: arg.id }],
    }),

    getCategories: builder.query({
      query: () => `/admin/categories`,
      providesTags: ['Categorys']
    }),
    getCategory: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/categories/show/${id}`,
    }),
    addNewCategory: builder.mutation({
      query: (initialCategory) => ({
        url: '/admin/categories/store',
        method: 'POST',
        body: initialCategory,
      }),
      invalidatesTags: ['Categorys'],
    }),
    deleteCategory: builder.mutation({
      query: (initialCategoryId) => ({
        url: `/admin/categories/delete/${initialCategoryId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categorys'],
    }),
    editCategory: builder.mutation({
      query: (category) => ({
        url: `/admin/categories/update/${category.id}`,
        method: 'PUT',
        body: category,
      }),
      invalidatesTags: ['Categorys']
    }),

    getAdminAdmins: builder.query({
      query: () => '/admin/user',
      providesTags: (res = []) => [
        'Admins',
        ...res.map(({ id }) => [{ type: 'Admins', id }]),
      ],
    }),
    getAdminAdmin: builder.query({
      query: (adminId) => `/admin/user/show/${adminId}`,
      providesTags: (res, err, arg) => [{ type: 'Admins', id: arg }],
    }),
    addNewAdmin: builder.mutation({
      query: (admin) => ({
        url: '/admin/user/store',
        method: 'POST',
        body: admin,
      }),
      invalidatesTags: ['Admins'],
    }),
    deleteAdmin: builder.mutation({
      query: (adminId) => ({
        url: `/admin/user/delete/${adminId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Admins'],
    }),
    editAdmin: builder.mutation({
      query: (admin) => ({
        url: `/admin/user/update/${admin.id}`,
        method: 'PUT',
        body: admin,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Admins', id: arg.id }],
    }),


    getRoles: builder.query({
      query: () => '/admin/roles',
      providesTags: ['Roles']
    }),
    getRole: builder.query({
      query: (roleId) => `/admin/roles/show/${roleId}`,
    }),
    addRole: builder.mutation({
      query: (role) => ({
        url: '/admin/roles/store',
        method: 'POST',
        body: role,
      }),
      invalidatesTags: ['Roles'],
    }),
    editRole: builder.mutation({
      query: (role) => ({
        url: `/admin/roles/update/${role.id}`,
        method: 'PUT',
        body: role,
      }),
      invalidatesTags: ['Roles'],
    }),
    deleteRole: builder.mutation({
      query: (roleId) => ({
        url: `/admin/roles/delete/${roleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Roles'],
    }),

    getPremissions: builder.query({
      query: () => '/admin/premission',
      providesTags: ['Premission']
    }),
    getPremission: builder.query({
      query: (PremissionId) => `/admin/premission/show/${PremissionId}`,
    }),
    addPremission: builder.mutation({
      query: (premission) => ({
        url: '/admin/premission/store',
        body: premission,
        method: 'POST',
      }),
      invalidatesTags: ['Premission'],
    }),
    editPremission: builder.mutation({
      query: (premission) => ({
        url: `/admin/premission/update/${premission.id}`,
        body: premission,
        method: 'PUT',
      }),
      invalidatesTags: ['Premission']
    }),
    deletePremission: builder.mutation({
      query: (PremissionId) => ({
        url: `/admin/premission/delete/${PremissionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Premission'],
    }),

    getContracts: builder.query({
      query: ({ prefix = "" }) => `${prefix}/agencies`,
      providesTags: ['Contracts']
    }),
    getContract: builder.query({
      query: ({ id, prefix = "" }) => `${prefix}/admin/agencies/show/${id}`,
    }),
    addContract: builder.mutation({
      query: (contract) => ({
        url: '/admin/agencies/store',
        body: contract,
        method: 'POST',
      }),
      invalidatesTags: ['Contracts'],
    }),
    editContract: builder.mutation({
      query: (contract) => ({
        url: `/admin/agencies/update/${contract.id}`,
        body: contract,
        method: 'PUT',
      }),
      invalidatesTags: ['Contracts'],
    }),
    deleteContract: builder.mutation({
      query: (contractId) => ({
        url: `/admin/agencies/delete/${contractId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contracts'],
    }),
  }),
});

export const {

  useGetPostsQuery,
  useGetPostQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useEditPostMutation,

  useGetProductsQuery,
  useGetProductQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,

  useGetSlidersQuery,
  useGetSliderQuery,
  useAddNewSliderMutation,
  useDeleteSliderMutation,
  useEditSliderMutation,

  useGetDiscountsQuery,
  useGetDiscountQuery,
  useAddNewDiscountMutation,
  useDeleteDiscountMutation,
  useEditDiscountMutation,

  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddNewCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,

  useGetAdminsQuery,
  useGetAdminQuery,
  useAddNewAdminMutation,
  useDeleteAdminMutation,
  useEditAdminMutation,

  useGetRolesQuery,
  useGetRoleQuery,
  useAddRoleMutation,
  useEditRoleMutation,
  useDeleteRoleMutation,

  useGetPremissionsQuery,
  useGetPremissionQuery,
  useAddPremissionMutation,
  useEditPremissionMutation,
  useDeletePremissionMutation,

  useGetContractsQuery,
  useGetContractQuery,
  useAddContractMutation,
  useEditContractMutation,
  useDeleteContractMutation,
} = apiSlice;
