// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//     reducerPath: "api",
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
//     tagTypes: ["Blogs", "Products", "Discounts", "Carts", "Sliders", "Categorys", "Admins", "Roles", "Premission", "Contracts"],
//     endpoints: (builder) => ({
//         getPosts: builder.query({
//             query: () => "/posts",
//             providesTags: (res = []) => [
//                 "Blogs",
//                 ...res.map(({ id }) => [{ type: "Blogs", id }])
//             ]
//         }),
//         getPost: builder.query({
//             query: (initialPostId) => `/posts/${initialPostId}`,
//             providesTags: (res, err, arg) => [{ type: "Blogs", id: arg }]
//         }),
//         addNewPost: builder.mutation({
//             query: (initialPost) => ({
//                 url: "/posts",
//                 method: "POST",
//                 body: initialPost
//             }),
//             invalidatesTags: ["Blogs"]
//         }),
//         deletePost: builder.mutation({
//             query: (initialPostId) => ({
//                 url: `/posts/${initialPostId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Blogs"]
//         }),
//         editPost: builder.mutation({
//             query: post => ({
//                 url: `/posts/${post.id}`,
//                 method: "PUT",
//                 body: post
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Blogs", id: arg.id }]
//         }),


//         getProducts: builder.query({
//             query: () => "/products",
//             providesTags: (res = []) => [
//                 "Products",
//                 ...res.map(({ id }) => [{ type: "Products", id }])
//             ]
//         }),
//         getProduct: builder.query({
//             query: (initialProductId) => `/products/${initialProductId}`,
//             providesTags: (res, err, arg) => [{ type: "Products", id: arg }]
//         }),
//         addNewProduct: builder.mutation({
//             query: (initialProduct) => ({
//                 url: "/products",
//                 method: "POST",
//                 body: initialProduct
//             }),
//             invalidatesTags: ["Products"]
//         }),
//         deleteProduct: builder.mutation({
//             query: (initialProductId) => ({
//                 url: `/products/${initialProductId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Products"]
//         }),
//         editProduct: builder.mutation({
//             query: product => ({
//                 url: `/products/${product.id}`,
//                 method: "PUT",
//                 body: product
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Products", id: arg.id }]
//         }),






//         getSliders: builder.query({
//             query: () => '/sliders',
//             providesTags: (res = [], error, arg) => [
//                 "Sliders",
//                 ...res.map(({ id }) => [{ type: "Sliders", id }])
//             ]
//         }),
//         getSlider: builder.query({
//             query: (initialSliderId) => `/sliders/${initialSliderId}`,
//             providesTags: (res, err, arg) => [{ type: "Sliders", id: arg }]
//         }),
//         addNewSlider: builder.mutation({
//             query: (initialSlider) => ({
//                 url: "/sliders",
//                 method: "POST",
//                 body: initialSlider
//             }),
//             invalidatesTags: ["Sliders"]
//         }),
//         deleteSlider: builder.mutation({
//             query: (initialSliderId) => ({
//                 url: `/sliders/${initialSliderId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Sliders"]
//         }),
//         editSlider: builder.mutation({
//             query: slider => ({
//                 url: `/sliders/${slider.id}`,
//                 method: "PUT",
//                 body: slider
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Sliders", id: arg.id }]
//         }),


//         getDiscounts: builder.query({
//             query: () => '/discounts',
//             providesTags: (res = [], err, arg) => [
//                 "Discounts",
//                 ...res.map(({ id }) => [{ type: "Discounts", id }])
//             ]
//         }),
//         getDiscount: builder.query({
//             query: (initialDiscountId) => `/discount/${initialDiscountId}`,
//             providesTags: (res, err, arg) => [{ type: "Discounts", id: arg }]
//         }),
//         addNewDiscount: builder.mutation({
//             query: (initialDiscount) => ({
//                 url: '/discounts',
//                 method: "POST",
//                 body: initialDiscount,
//             }),
//             invalidatesTags: ["Discounts"]

//         }),
//         deleteDiscount: builder.mutation({
//             query: (initialDiscountId) => ({
//                 url: `/discounts/${initialDiscountId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Discounts"]
//         }),
//         editDiscount: builder.mutation({
//             query: discount => ({
//                 url: `/discounts/${discount.id}`,
//                 method: "PUT",
//                 body: discount
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Discounts", id: arg.id }]
//         }),


//         getCategories: builder.query({
//             query: () => "/categories",
//             providesTags: (res = []) => [
//                 "Categorys",
//                 ...res.map(({ id }) => [{ type: "Categorys", id }])
//             ]
//         }),
//         getCategory: builder.query({
//             query: (initialCategoryId) => `/categories/${initialCategoryId}`,
//             providesTags: (res, err, arg) => [{ type: "Categorys", id: arg }]
//         }),
//         addNewCategory: builder.mutation({
//             query: (initialCategory) => ({
//                 url: "/categories",
//                 method: "POST",
//                 body: initialCategory
//             }),
//             invalidatesTags: ["Categorys"]
//         }),
//         deleteCategory: builder.mutation({
//             query: (initialCategoryId) => ({
//                 url: `/categories/${initialCategoryId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Categorys"]
//         }),
//         editCategory: builder.mutation({
//             query: category => ({
//                 url: `/categories/${category.id}`,
//                 method: "PUT",
//                 body: category
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Categorys", id: arg.id }]
//         }),





//         getAdmins: builder.query({
//             query: () => "/admins",
//             providesTags: (res = []) => [
//                 "Admins",
//                 ...res.map(({ id }) => [{ type: "Admins", id }])
//             ]
//         }),
//         getAdmin: builder.query({
//             query: (adminId) => `/admins/${adminId}`,
//             providesTags: (res, err, arg) => [{ type: "Admins", id: arg }]
//         }),
//         addNewAdmin: builder.mutation({
//             query: admin => ({
//                 url: "/admins",
//                 method: "POST",
//                 body: admin
//             }),
//             invalidatesTags: ["Admins"]
//         }),
//         deleteAdmin: builder.mutation({
//             query: adminId => ({
//                 url: `/admins/${adminId}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: ["Admins"]
//         }),
//         editAdmin: builder.mutation({
//             query: admin => ({
//                 url: `/admins/${admin.id}`,
//                 method: "PUT",
//                 body: admin
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Admins", id: arg.id }]
//         }),

//         getRoles: builder.query({
//             query: () => '/roles',
//             providesTags: (res = []) => [
//                 "Roles",
//                 ...res.map(({ id }) => [{ type: "Roles", id }])
//             ]
//         }),
//         getRole: builder.query({
//             query: (roleId) => `/roles/${roleId}`,
//             providesTags: (res, err, arg) => [{ type: "Roles", id: arg }]
//         }),
//         addRole: builder.mutation({
//             query: (role) => ({
//                 url: "/roles",
//                 method: "POST",
//                 body: role
//             }),
//             invalidatesTags: ["Roles"]
//         }),
//         editRole: builder.mutation({
//             query: (role) => ({
//                 url: `/roles/${role.id}`,
//                 method: "PUT",
//                 body: role
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Roles", id: arg.id }]
//         }),
//         deleteRole: builder.mutation({
//             query: (roleId) => ({

//                 url: `/roles/${roleId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Roles"]
//         }),




//         getPremissions: builder.query({
//             query: () => "/premission",
//             providesTags: (res = []) => [
//                 "Premission",
//                 ...res.map(({ id }) => [{ type: "Premission", id }])
//             ]
//         }),
//         getPremission: builder.query({
//             query: (PremissionId) => `/premission/${PremissionId}`,
//             providesTags: (res, err, arg) => [{ type: "Premission", id: arg }]
//         }),
//         addPremission: builder.mutation({
//             query: (premission) => ({
//                 url: "/premission",
//                 body: premission,
//                 method: "POST"
//             }),
//             invalidatesTags: ["Premission"]

//         }),
//         editPremission: builder.mutation({
//             query: (premission) => ({
//                 url: `/premission/${premission.id}`,
//                 body: premission,
//                 method: "PUT"
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Premission", id: arg.id }]
//         }),
//         deletePremission: builder.mutation({
//             query: (PremissionId) => ({
//                 url: `/premission/${PremissionId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Premission"]
//         }),






//         getContracts: builder.query({
//             query: () => "/contracts",
//             providesTags: (res = []) => [
//                 "Contracts",
//                 ...res.map(({ id }) => [{ type: "Contracts", id }])
//             ]
//         }),
//         getContract: builder.query({
//             query: (contractId) => `/contracts/${contractId}`,
//             providesTags: (res, err, arg) => [{ type: "Contracts", id: arg }]
//         }),
//         addContract: builder.mutation({
//             query: (contract) => ({
//                 url: "/contracts",
//                 body: contract,
//                 method: "POST"
//             }),
//             invalidatesTags: ["Contracts"]

//         }),
//         editContract: builder.mutation({
//             query: (contract) => ({
//                 url: `/contracts/${contract.id}`,
//                 body: contract,
//                 method: "PUT"
//             }),
//             invalidatesTags: (res, err, arg) => [{ type: "Contracts", id: arg.id }]
//         }),
//         deleteContract: builder.mutation({
//             query: (contractId) => ({
//                 url: `/contracts/${contractId}`,
//                 method: "DELETE"
//             }),
//             invalidatesTags: ["Contracts"]
//         })


//     })
// });

// export const {
//     useGetPostsQuery,
//     useGetPostQuery,
//     useAddNewPostMutation,
//     useDeletePostMutation,
//     useEditPostMutation,

//     useGetProductsQuery,
//     useGetProductQuery,
//     useAddNewProductMutation,
//     useDeleteProductMutation,
//     useEditProductMutation,

//     useGetSlidersQuery,
//     useGetSliderQuery,
//     useAddNewSliderMutation,
//     useDeleteSliderMutation,
//     useEditSliderMutation,

//     useGetDiscountsQuery,
//     useGetDiscountQuery,
//     useAddNewDiscountMutation,
//     useDeleteDiscountMutation,
//     useEditDiscountMutation,


//     useGetCategoriesQuery,
//     useGetCategoryQuery,
//     useAddNewCategoryMutation,
//     useDeleteCategoryMutation,
//     useEditCategoryMutation,


//     useGetAdminsQuery,
//     useGetAdminQuery,
//     useAddNewAdminMutation,
//     useDeleteAdminMutation,
//     useEditAdminMutation,



//     useGetRolesQuery,
//     useGetRoleQuery,
//     useAddRoleMutation,
//     useEditRoleMutation,
//     useDeleteRoleMutation,

//     useGetPremissionsQuery,
//     useGetPremissionQuery,
//     useAddPremissionMutation,
//     useEditPremissionMutation,
//     useDeletePremissionMutation,

//     useGetContractsQuery,
//     useGetContractQuery,
//     useAddContractMutation,
//     useEditContractMutation,
//     useDeleteContractMutation
// } = apiSlice;

