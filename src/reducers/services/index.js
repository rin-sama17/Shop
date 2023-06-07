import axios from "axios";

const SERVER_URL = "http://localhost:8000/api";
const ADMIN_SERVER_URL = "http://localhost:8000/api/admin";
const headers = { headers: { Accept: 'application/json' } };

export { default as handleErrors } from "./handleErrors";
export const getAllCategories = (prefix = "") => {
    const url = `${SERVER_URL}${prefix}/categories`;
    return axios.get(url);
};

export const getOneCategory = (categoryId) => {
    const url = `${SERVER_URL}/admin/categories/show/${categoryId}`;
    return axios.get(url);
};

export const createCategory = (category) => {
    const url = `${ADMIN_SERVER_URL}/categories/store`;
    return axios.post(url, category, headers);
};

export const updateCategory = (category) => {
    const url = `${ADMIN_SERVER_URL}/categories/update/${category.id}`;
    return axios.put(url, category, headers);
};

export const removeCategory = (categoryId) => {
    const url = `${ADMIN_SERVER_URL}/categories/delete/${categoryId}`;
    return axios.delete(url);
};




export const getAllProducts = (prefix = "") => {
    const url = `${SERVER_URL}${prefix}/products`;
    return axios.get(url);
};

export const getOneProduct = (productId, prefix = "") => {
    const url = `${SERVER_URL}${prefix}/products/show/${productId}`;
    return axios.get(url);
};

export const createProduct = (product) => {
    const url = `${ADMIN_SERVER_URL}/products/store`;
    console.log(product);
    return axios.post(url, product, headers);
};

export const updateProduct = (product) => {
    const url = `${ADMIN_SERVER_URL}/products/update/${product.id}`;
    return axios.put(url, product, headers);
};

export const removeProduct = (productId) => {
    const url = `${ADMIN_SERVER_URL}/products/delete/${productId}`;
    return axios.delete(url);
};








export const getAllPosts = (prefix = "") => {
    const url = `${SERVER_URL}${prefix}/posts`;
    return axios.get(url);
};

export const getOnePost = (postId, prefix = "") => {
    const url = `${SERVER_URL}${prefix}/posts/show/${postId}`;
    return axios.get(url);
};

export const createPost = (post) => {
    const url = `${ADMIN_SERVER_URL}/posts/store`;
    return axios.post(url, post, headers);
};

export const updatePost = (post) => {
    const url = `${ADMIN_SERVER_URL}/posts/update/${post.id}`;
    return axios.put(url, post, headers);
};

export const removePost = (postId) => {
    const url = `${ADMIN_SERVER_URL}/posts/delete/${postId}`;
    return axios.delete(url);
};








export const getAllDiscounts = (prefix = "") => {
    const url = `${SERVER_URL}${prefix}/discounts`;
    return axios.get(url);
};

export const getOneDiscount = (discountId, prefix = "") => {
    const url = `${SERVER_URL}${prefix}/discounts/show/${discountId}`;
    return axios.get(url);
};

export const createDiscount = (discount) => {
    const url = `${ADMIN_SERVER_URL}/discounts/store`;
    return axios.post(url, discount, headers);
};

export const updateDiscount = (discount) => {
    const url = `${ADMIN_SERVER_URL}/discounts/update/${discount.id}`;
    return axios.put(url, discount, headers);
};

export const removeDiscount = (discountId) => {
    const url = `${ADMIN_SERVER_URL}/discounts/delete/${discountId}`;
    return axios.delete(url);
};








export const getAllContracts = (prefix = "") => {
    const url = `${SERVER_URL}${prefix}/contracts`;
    return axios.get(url);
};

export const getOneContract = (contractId, prefix = "") => {
    const url = `${SERVER_URL}${prefix}/contracts/show/${contractId}`;
    return axios.get(url);
};

export const createContract = (contract) => {
    const url = `${ADMIN_SERVER_URL}/contracts/store`;
    return axios.post(url, contract, headers);
};

export const updateContract = (contract) => {
    const url = `${ADMIN_SERVER_URL}/contracts/update/${contract.id}`;
    return axios.put(url, contract, headers);
};

export const removeContract = (contractId) => {
    const url = `${ADMIN_SERVER_URL}/contracts/delete/${contractId}`;
    return axios.delete(url);
};








export const getAllPremissions = () => {
    const url = `${ADMIN_SERVER_URL}/premissions`;
    return axios.get(url);
};

export const getOnePremission = (premissionId) => {
    const url = `${ADMIN_SERVER_URL}/premissions/show/${premissionId}`;
    return axios.get(url);
};

export const createPremission = (premission) => {
    const url = `${ADMIN_SERVER_URL}/premissions/store`;
    return axios.post(url, premission, headers);
};

export const updatePremission = (premission) => {
    const url = `${ADMIN_SERVER_URL}/premissions/update/${premission.id}`;
    return axios.put(url, premission, headers);
};

export const removePremission = (premissionId) => {
    const url = `${ADMIN_SERVER_URL}/premissions/delete/${premissionId}`;
    return axios.post(url);
};








export const getAllRoles = () => {
    const url = `${ADMIN_SERVER_URL}/roles`;
    return axios.get(url);
};

export const getOneRole = (roleId) => {
    const url = `${ADMIN_SERVER_URL}/roles/show/${roleId}`;
    return axios.get(url);
};

export const createRole = (role) => {
    const url = `${ADMIN_SERVER_URL}/roles/store`;
    return axios.post(url, role, headers);
};

export const updateRole = (role) => {
    const url = `${ADMIN_SERVER_URL}/roles/update/${role.id}`;
    return axios.put(url, role, headers);
};

export const removeRole = (roleId) => {
    const url = `${ADMIN_SERVER_URL}/roles/delete/${roleId}`;
    return axios.delete(url);
};








export const getAllUsers = () => {
    const url = `${ADMIN_SERVER_URL}/users`;
    return axios.get(url);
};

export const getOneUser = (userId) => {
    const url = `${ADMIN_SERVER_URL}/users/show/${userId}`;
    return axios.get(url);
};

export const createUser = (user) => {
    const url = `${ADMIN_SERVER_URL}/users/store`;
    return axios.post(url, user, headers);
};

export const updateUser = (user) => {
    const url = `${ADMIN_SERVER_URL}/users/update/${user.id}`;
    return axios.put(url, user, headers);
};

export const removeUser = (userId) => {
    const url = `${ADMIN_SERVER_URL}/users/delete/${userId}`;
    return axios.delete(url);
};