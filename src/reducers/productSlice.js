import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            name: 'sqas',
            price: '1999299',
            discount: '',
            details: '',
            stock: '',
            thumbnail: '',
            photos: '',
            category: '',
            tags: '',
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