import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
    tagTypes: ["Blogs", "Products", "Discounts", "Carts", "Sliders", "Categorys", "Comments", "Description", "Admins", "Roles", "Access", "Contracts"],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
            providesTags: (res = []) => [
                "Blogs",
                ...res.map(({ id }) => ({ type: "Blogs", id }))
            ]
        }),
        getPost: builder.query({
            query: (initialPostId) => `/posts/${initialPostId}`,
            providesTags: (res, err, arg) => [{ type: "Blogs", id: arg }]
        }),
        addNewPost: builder.mutation({
            query: (initialPost) => ({
                url: "/posts",
                method: "POST",
                body: initialPost
            }),
            invalidatesTags: ["Blogs"]
        }),
        deletePost: builder.mutation({
            query: (initialPostId) => ({
                url: `/posts/${initialPostId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Blogs"]
        }),
        editPost: builder.mutation({
            query: post => ({
                url: `/posts/${post.id}`,
                method: "PUT",
                body: post
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Blogs", id: arg.id }]
        }),


        getProducts: builder.query({
            query: () => "/products",
            providesTags: (res = []) => [
                "Products",
                ...res.map(({ id }) => ({ type: "Products", id }))
            ]
        }),
        getProduct: builder.query({
            query: (initialProductId) => `/products/${initialProductId}`,
            providesTags: (res, err, arg) => [{ type: "Products", id: arg }]
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
        editProduct: builder.mutation({
            query: product => ({
                url: `/products/${product.id}`,
                method: "PUT",
                body: product
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Products", id: arg.id }]
        }),






        getSliders: builder.query({
            query: () => '/sliders',
            providesTags: (res = [], error, arg) => [
                "Sliders",
                ...res.map(({ id }) => ({ type: "Sliders", id }))
            ]
        }),
        getSlider: builder.query({
            query: (initialSliderId) => `/sliders/${initialSliderId}`,
            providesTags: (res, err, arg) => [{ type: "Sliders", id: arg }]
        }),
        addNewSlider: builder.mutation({
            query: (initialSlider) => ({
                url: "/sliders",
                method: "POST",
                body: initialSlider
            }),
            invalidatesTags: ["Sliders"]
        }),
        deleteSlider: builder.mutation({
            query: (initialSliderId) => ({
                url: `/sliders/${initialSliderId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Sliders"]
        }),
        editSlider: builder.mutation({
            query: slider => ({
                url: `/sliders/${slider.id}`,
                method: "PUT",
                body: slider
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Sliders", id: arg.id }]
        }),


        getDiscounts: builder.query({
            query: () => '/discounts',
            providesTags: (res = [], err, arg) => [
                "Discounts",
                ...res.map(({ id }) => [{ type: "Discounts", id }])
            ]
        }),
        getDiscount: builder.query({
            query: (initialDiscountId) => `/discount/${initialDiscountId}`,
            providesTags: (res, err, arg) => [{ type: "Discounts", id: arg }]
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
                url: `/discounts/${initialDiscountId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Discounts"]
        }),
        editDiscount: builder.mutation({
            query: discount => ({
                url: `/discounts/${discount.id}`,
                method: "PUT",
                body: discount
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Discounts", id: arg.id }]
        }),


        getCategorys: builder.query({
            query: () => "/categorys",
            providesTags: (res = []) => [
                "Categorys",
                ...res.map(({ id }) => ({ type: "Categorys", id }))
            ]
        }),
        getCategory: builder.query({
            query: (initialCategoryId) => `/categorys/${initialCategoryId}`,
            providesTags: (res, err, arg) => [{ type: "Categorys", id: arg }]
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
        }),
        editCategory: builder.mutation({
            query: category => ({
                url: `/categorys/${category.id}`,
                method: "PUT",
                body: category
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Categorys", id: arg.id }]
        }),


        getComments: builder.query({
            query: () => "comments",
            providesTags: (res = []) => [
                "Comments",
                ...res.map(({ id }) => ({ type: "Comments", id }))
            ],
        }),
        getComment: builder.query({
            query: (initialCommentId) => `/comments/${initialCommentId}`,
            providesTags: (res, err, arg) => [{ type: "Comments", id: arg }]
        }),
        addNewComment: builder.mutation({
            query: (initialComment) => ({
                url: "/comments",
                method: "POST",
                body: initialComment
            }),
            invalidatesTags: ["Comments"]
        }),
        deleteComment: builder.mutation({
            query: (initialCommentId) => ({
                url: `/comments/${initialCommentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Comments"]
        }),
        editComment: builder.mutation({
            query: comment => {
                return {
                    url: `/comments/${comment.id}`,
                    method: "PUT",
                    body: comment
                };
            },
            invalidatesTags: (res, err, arg) => [{ type: "Comments", id: arg.id }]
        }),


        getDescription: builder.query({
            query: () => "/description",
            providesTags: ["Description"]
        }),
        editDescription: builder.mutation({
            query: description => ({
                url: "/description",
                method: "PUT",
                body: description
            }),
            invalidatesTags: ["Description"]
        }),


        getAdmins: builder.query({
            query: () => "/admins",
            providesTags: (res = []) => [
                "Admins",
                ...res.map(({ id }) => ({ type: "Admins", id }))
            ]
        }),
        getAdmin: builder.query({
            query: (adminId) => `/admins/${adminId}`,
            providesTags: (res, err, arg) => [{ type: "Admins", id: arg }]
        }),
        addNewAdmin: builder.mutation({
            query: admin => ({
                url: "/admins",
                method: "POST",
                body: admin
            }),
            invalidatesTags: ["Admins"]
        }),
        deleteAdmin: builder.mutation({
            query: adminId => ({
                url: `/admins/${adminId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Admins"]
        }),
        editAdmin: builder.mutation({
            query: admin => ({
                url: `/admins/${admin.id}`,
                method: "PUT",
                body: admin
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Admins", id: arg.id }]
        }),

        getRoles: builder.query({
            query: () => '/roles',
            providesTags: (res = []) => [
                "Roles",
                ...res.map(({ id }) => ({ type: "Roles", id }))
            ]
        }),
        getRole: builder.query({
            query: (roleId) => `/roles/${roleId}`,
            providesTags: (res, err, arg) => [{ type: "Roles", id: arg }]
        }),
        addRole: builder.mutation({
            query: (role) => ({
                url: "/roles",
                method: "POST",
                body: role
            }),
            invalidatesTags: ["Roles"]
        }),
        editRole: builder.mutation({
            query: (role) => ({
                url: `/roles/${role.id}`,
                method: "PUT",
                body: role
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Roles", id: arg.id }]
        }),
        deleteRole: builder.mutation({
            query: (roleId) => ({

                url: `/roles/${roleId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Roles"]
        }),




        getAllAccess: builder.query({
            query: () => "/access",
            providesTags: (res = []) => [
                "Access",
                ...res.map(({ id }) => ({ type: "Access", id }))
            ]
        }),
        getAccess: builder.query({
            query: (accessId) => `/access/${accessId}`,
            providesTags: (res, err, arg) => ({ type: "Access", id: arg })
        }),
        addAccess: builder.mutation({
            query: (access) => ({
                url: "/access",
                body: access,
                method: "POST"
            }),
            invalidatesTags: ["Access"]

        }),
        editAccess: builder.mutation({
            query: (access) => ({
                url: `/access/${access.id}`,
                body: access,
                method: "PUT"
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Access", id: arg.id }]
        }),
        deleteAccess: builder.mutation({
            query: (accessId) => ({
                url: `/access/${accessId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Access"]
        }),






        getContracts: builder.query({
            query: () => "/contracts",
            providesTags: (res = []) => [
                "Contracts",
                ...res.map(({ id }) => ({ type: "Contracts", id }))
            ]
        }),
        getContract: builder.query({
            query: (contractId) => `/contracts/${contractId}`,
            providesTags: (res, err, arg) => ({ type: "Contracts", id: arg })
        }),
        addContract: builder.mutation({
            query: (contract) => ({
                url: "/contracts",
                body: contract,
                method: "POST"
            }),
            invalidatesTags: ["Contracts"]

        }),
        editContract: builder.mutation({
            query: (contract) => ({
                url: `/contracts/${contract.id}`,
                body: contract,
                method: "PUT"
            }),
            invalidatesTags: (res, err, arg) => [{ type: "Contracts", id: arg.id }]
        }),
        deleteContract: builder.mutation({
            query: (contractId) => ({
                url: `/contracts/${contractId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Contracts"]
        })


    })
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


    useGetCategorysQuery,
    useGetCategoryQuery,
    useAddNewCategoryMutation,
    useDeleteCategoryMutation,
    useEditCategoryMutation,


    useGetCommentsQuery,
    useGetCommentQuery,
    useAddNewCommentMutation,
    useDeleteCommentMutation,
    useEditCommentMutation,


    useGetDescriptionQuery,
    useEditDescriptionMutation,


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

    useGetAllAccessQuery,
    useGetAccessQuery,
    useAddAccessMutation,
    useEditAccessMutation,
    useDeleteAccessMutation,

    useGetContractsQuery,
    useGetContractQuery,
    useAddContractMutation,
    useEditContractMutation,
    useDeleteContractMutation
} = apiSlice;