import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000' }),
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
      query: () => '/posts',
    }),
    getPost: builder.query({
      query: (initialPostId) => `/posts/show/${initialPostId}`,
    }),

    getProducts: builder.query({
      query: () => '/products',
    }),
    getProduct: builder.query({
      query: (initialProductId) => `/products/show/${initialProductId}`,
    }),

    getSliders: builder.query({
      query: () => '/sliders',
    }),
    getSlider: builder.query({
      query: (initialSliderId) => `/sliders/show/${initialSliderId}`,
    }),

    getDiscounts: builder.query({
      query: () => '/discounts',
    }),
    getDiscount: builder.query({
      query: (initialDiscountId) => `/discounts/show/${initialDiscountId}`,
    }),

    getCategories: builder.query({
      query: () => '/categories',
    }),
    getCategory: builder.query({
      query: (initialCategoryId) => `/categories/show/${initialCategoryId}`,
    }),

    getAdmins: builder.query({
      query: () => '/user',
    }),
    getAdmin: builder.query({
      query: (adminId) => `/user/show/${adminId}`,
    }),

    getRoles: builder.query({
      query: () => '/roles',
    }),
    getRole: builder.query({
      query: (roleId) => `/roles/show/${roleId}`,
    }),

    getPremissions: builder.query({
      query: () => '/premission',
    }),
    getPremission: builder.query({
      query: (PremissionId) => `/premission/show/${PremissionId}`,
    }),

    getContracts: builder.query({
      query: () => '/contracts',
    }),
    getContract: builder.query({
      query: (contractId) => `/contracts/show/${contractId}`,
    }),




    //admin requests

    getAdminPosts: builder.query({
      query: () => '/admin/posts',
      providesTags: (res = []) => [
        'Blogs',
        ...res.map(({ id }) => [{ type: 'Blogs', id }]),
      ],
    }),
    getAdminPost: builder.query({
      query: (initialPostId) => `/admin/posts/show/${initialPostId}`,
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

    getAdminProducts: builder.query({
      query: () => '/admin/products',
      providesTags: (res = []) => [
        'Products',
        ...res.map(({ id }) => [{ type: 'Products', id }]),
      ],
    }),
    getAdminProduct: builder.query({
      query: (initialProductId) => `/admin/products/show/${initialProductId}`,
      providesTags: (res, err, arg) => [{ type: 'Products', id: arg }],
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
      invalidatesTags: (res, err, arg) => [{ type: 'Products', id: arg.id }],
    }),

    getAdminSliders: builder.query({
      query: () => '/admin/sliders',
      providesTags: (res = [], error, arg) => [
        'Sliders',
        ...res.map(({ id }) => [{ type: 'Sliders', id }]),
      ],
    }),
    getAdminSlider: builder.query({
      query: (initialSliderId) => `/admin/sliders/show/${initialSliderId}`,
      providesTags: (res, err, arg) => [{ type: 'Sliders', id: arg }],
    }),
    addNewSlider: builder.mutation({
      query: (initialSlider) => ({
        url: '/admin/sliders/store',
        method: 'POST',
        body: initialSlider,
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

    getAdminDiscounts: builder.query({
      query: () => '/admin/discounts',
      providesTags: (res = [], err, arg) => [
        'Discounts',
        ...res.map(({ id }) => [{ type: 'Discounts', id }]),
      ],
    }),
    getAdminDiscount: builder.query({
      query: (initialDiscountId) => `/admin/discounts/show/${initialDiscountId}`,
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

    getAdminCategories: builder.query({
      query: () => '/admin/categories',
      providesTags: (res = []) => [
        'Categorys',
        ...res.map(({ id }) => [{ type: 'Categorys', id }]),
      ],
    }),
    getAdminCategory: builder.query({
      query: (initialCategoryId) => `/admin/categories/show/${initialCategoryId}`,
      providesTags: (res, err, arg) => [{ type: 'Categorys', id: arg }],
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
      invalidatesTags: (res, err, arg) => [{ type: 'Categorys', id: arg.id }],
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

    getAdminRoles: builder.query({
      query: () => '/role/index',
      providesTags: (res = []) => [
        'Roles',
        ...res.map(({ id }) => [{ type: 'Roles', id }]),
      ],
    }),
    getAdminRole: builder.query({
      query: (roleId) => `/admin/role/show/${roleId}`,
      providesTags: (res, err, arg) => [{ type: 'Roles', id: arg }],
    }),
    addRole: builder.mutation({
      query: (role) => ({
        url: '/role/store',
        method: 'POST',
        body: role,
      }),
      invalidatesTags: ['Roles'],
    }),
    editRole: builder.mutation({
      query: (role) => ({
        url: `/admin/role/update/${role.id}`,
        method: 'PUT',
        body: role,
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Roles', id: arg.id }],
    }),
    deleteRole: builder.mutation({
      query: (roleId) => ({
        url: `/admin/role/delete/${roleId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Roles'],
    }),

    getAdminPremissions: builder.query({
      query: () => '/admin/premission',
      providesTags: (res = []) => [
        'Premission',
        ...res.map(({ id }) => [{ type: 'Premission', id }]),
      ],
    }),
    getAdminPremission: builder.query({
      query: (PremissionId) => `/admin/premission/show/${PremissionId}`,
      providesTags: (res, err, arg) => [{ type: 'Premission', id: arg }],
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
      invalidatesTags: (res, err, arg) => [{ type: 'Premission', id: arg.id }],
    }),
    deletePremission: builder.mutation({
      query: (PremissionId) => ({
        url: `/admin/premission/delete/${PremissionId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Premission'],
    }),

    getAdminContracts: builder.query({
      query: () => '/admin/contracts',
      providesTags: (res = []) => [
        'Contracts',
        ...res.map(({ id }) => [{ type: 'Contracts', id }]),
      ],
    }),
    getAdminContract: builder.query({
      query: (contractId) => `/admin/contracts/show/${contractId}`,
      providesTags: (res, err, arg) => [{ type: 'Contracts', id: arg }],
    }),
    addContract: builder.mutation({
      query: (contract) => ({
        url: '/admin/contracts/store',
        body: contract,
        method: 'POST',
      }),
      invalidatesTags: ['Contracts'],
    }),
    editContract: builder.mutation({
      query: (contract) => ({
        url: `/admin/contracts/update/${contract.id}`,
        body: contract,
        method: 'PUT',
      }),
      invalidatesTags: (res, err, arg) => [{ type: 'Contracts', id: arg.id }],
    }),
    deleteContract: builder.mutation({
      query: (contractId) => ({
        url: `/admin/contracts/delete/${contractId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contracts'],
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

  useGetDiscountsQuery,
  useGetDiscountQuery,

  useGetCategoriesQuery,
  useGetCategoryQuery,

  useGetAdminsQuery,
  useGetAdminQuery,

  useGetRolesQuery,
  useGetRoleQuery,

  useGetPremissionsQuery,
  useGetPremissionQuery,

  useGetContractsQuery,
  useGetContractQuery,

  //admin requests

  useGetAdminPostsQuery,
  useGetAdminPostQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useEditPostMutation,

  useGetAdminProductsQuery,
  useGetAdminProductQuery,
  useAddNewProductMutation,
  useDeleteProductMutation,
  useEditProductMutation,

  useGetAdminSlidersQuery,
  useGetAdminSliderQuery,
  useAddNewSliderMutation,
  useDeleteSliderMutation,
  useEditSliderMutation,

  useGetAdminDiscountsQuery,
  useGetAdminDiscountQuery,
  useAddNewDiscountMutation,
  useDeleteDiscountMutation,
  useEditDiscountMutation,

  useGetAdminCategoriesQuery,
  useGetAdminCategoryQuery,
  useAddNewCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,

  useGetAdminAdminsQuery,
  useGetAdminAdminQuery,
  useAddNewAdminMutation,
  useDeleteAdminMutation,
  useEditAdminMutation,

  useGetAdminRolesQuery,
  useGetAdminRoleQuery,
  useAddRoleMutation,
  useEditRoleMutation,
  useDeleteRoleMutation,

  useGetAdminPremissionsQuery,
  useGetAdminPremissionQuery,
  useAddPremissionMutation,
  useEditPremissionMutation,
  useDeletePremissionMutation,

  useGetAdminContractsQuery,
  useGetAdminContractQuery,
  useAddContractMutation,
  useEditContractMutation,
  useDeleteContractMutation,
} = apiSlice;
