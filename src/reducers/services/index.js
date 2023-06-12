import axios from "axios";

const ADMIN_SERVER_URL = "http://localhost:8000/api/admin";
const headers = {
    headers: {
        Accept: 'application/json'
    }
};

export { default as handleErrors } from "./handleErrors";
export { default as convertToForm } from "./convertToForm";

export const getAllCategories = () => {
    const url = `http://localhost:8000/api/categories`;
    return axios.get(url);
};

export const getOneCategory = (categoryId) => {
    const url = `${ADMIN_SERVER_URL}/categories/show/${categoryId}`;
    return axios.get(url, headers);
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
    return axios.delete(url, headers);
};




export const getAllProducts = () => {
    const url = `${ADMIN_SERVER_URL}/products`;
    return axios.get(url);
};

export const getOneProduct = (productId) => {
    const url = `${ADMIN_SERVER_URL}/products/show/${productId}`;
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








export const getAllPosts = () => {
    const url = `${ADMIN_SERVER_URL}/posts`;
    return axios.get(url);
};

export const getOnePost = (postId,) => {
    const url = `${ADMIN_SERVER_URL}/posts/show/${postId}`;
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







export const getAllAgencies = () => {
    const url = `${ADMIN_SERVER_URL}/agencies`;
    return axios.get(url);
};

export const getAgency = (agencyId,) => {
    const url = `${ADMIN_SERVER_URL}/agencies/show/${agencyId}`;
    return axios.get(url);
};

export const createAgency = (agency) => {
    const url = `${ADMIN_SERVER_URL}/agencies/store`;
    return axios.post(url, agency, headers);
};

export const updateAgency = (agency) => {
    const url = `${ADMIN_SERVER_URL}/agencies/update/${agency.id}`;
    return axios.put(url, agency, headers);
};

export const removeAgency = (agencyId) => {
    const url = `${ADMIN_SERVER_URL}/agencies/delete/${agencyId}`;
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



export const getAllSliders = () => {
    const url = `${ADMIN_SERVER_URL}/sliders`;
    return axios.get(url);
};

export const getOneSlider = (sliderId,) => {
    const url = `${ADMIN_SERVER_URL}/sliders/show/${sliderId}`;
    return axios.get(url);
};

export const createSlider = (slider) => {
    const url = `${ADMIN_SERVER_URL}/sliders/store`;
    return axios.post(url, slider, headers);
};

export const updateSlider = (slider) => {
    const url = `${ADMIN_SERVER_URL}/sliders/update/${slider.id}`;
    return axios.put(url, slider, headers);
};

export const removeSlider = (sliderId) => {
    const url = `${ADMIN_SERVER_URL}/sliders/delete/${sliderId}`;
    return axios.delete(url);
};




export const userLogin = (user) => {
    const url = 'http://localhost:8000/api/login';
    return axios.post(url, user, headers);
};

export const updateUserInfo = (user) => {
    const url = `${ADMIN_SERVER_URL}/user/update/${user.id}`;
    return axios.post(url, user, headers);
};
