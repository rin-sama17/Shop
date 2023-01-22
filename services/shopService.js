import axios from "axios";

const SERVER_URL = "https://dummyjson.com"; //fake data

// @desc Get All Products
// @route GET https://dummyjson.com/Products
export const getAllProducts = () => {
    const url = `${SERVER_URL}/products`;
    return axios.get(url);
};


// @desc Get Product
// @route GET https://dummyjson.com/Products/productId
export const getProduct = (productId) => {
    const url = `${SERVER_URL}/products/${productId}`;
    return axios.get(url);
};


// @desc Get All Slides
// @route GET https://dummyjson.com/Slides
export const getAllSlides = () => {
    const url = `${SERVER_URL}/slides`;
    return axios.get(url);
};


// @desc Get All posts
// @route GET https://dummyjson.com/posts
export const getAllPosts = () => {
    const url = `${SERVER_URL}/posts`;
    return axios.get(url);
};


// @desc Get post
// @route GET https://dummyjson.com/posts/postId
export const getPost = (postId) => {
    const url = `${SERVER_URL}/posts/${postId}`;
    return axios.get(url);
};


// @desc Get comments of product
// @route GET https://dummyjson.com/comments/post/postId
export const getProductComments = (postId) => {
    const url = `${SERVER_URL}/comments/post/${postId}`;
    return axios.get(url);
};
