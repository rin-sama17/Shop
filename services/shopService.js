import axios from "axios";

const SERVER_URL = " http://localhost:9000";

export const getAllProducts = () => {
    const url = `${SERVER_URL}/products`;
    return axios.get(url);
};


export const getProduct = (productId) => {
    const url = `${SERVER_URL}/products/${productId}`;
    return axios.get(url);
};


export const createProduct = (product) => {
    const url = `${SERVER_URL}/products`;
    return axios.put(url, product);
};


export const getAllPosts = () => {
    const url = `${SERVER_URL}/posts`;
    return axios.get(url);
};


export const createPost = (post) => {
    const url = `${SERVER_URL}/posts`;
    return axios.post(url, post);
};


export const getPost = (postId) => {
    const url = `${SERVER_URL}/posts/${postId}`;
    return axios.get(url);
};


