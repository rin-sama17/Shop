import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: "A33k5GmVlnMlPo7ZM9Uaf",
            name: 'sqas',
            price: '1999299',
            discount: 12,
            details: 'لباس لباس',
            stock: 3,
            thumbnail: '',
            photos: '',
            category: 'لباس',
            tags: 'لباس/پوشاک/مد',
        }
    ],
    state: "idel",
    error: ""
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productAdded: {
            reducer(state, action) {
                state.products.push(action.payload);
            },
            prepare(
                values
            ) {
                const {
                    name,
                    price,
                    discount,
                    details,
                    stock,
                    thumbnail,
                    photos,
                    category,
                    tags,
                } = values;
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        name,
                        price,
                        discount,
                        details,
                        stock,
                        thumbnail,
                        photos,
                        category,
                        tags,
                    },
                };
            },
        },
    },
});
export const getAllProduct = (state) => state.products.products;

export const getProductById = (state, productId) =>
    state.products.products.find((product) => product.id === productId);

export const { productAdded } = productSlice.actions;
export default productSlice.reducer;