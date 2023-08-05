import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    products: [],
    sortedProducts: [],
    newProducts: [],
    discountedProducts: [],
    isSuccess: false
};

export const fetchFilterProduct = createAsyncThunk(
    'filterProduct/fetchProducts',
    async () => {
        try {
            const url = "http://localhost:8000/api/products";
            const res = await axios.get(url);
            return res.data.data[0];
        } catch (error) {
            console.error(error);
        }
    },
);


const filtredProductSlice = createSlice({
    name: 'filterProduct',
    initialState,
    reducers: {
        filterProducts: (state, action) => {
            const { category, value, sortBy } = action.payload;
            console.log(action.payload);
            let sortedItems;
            if (sortBy === 0) {
                sortedItems = state.products;
            } else if (sortBy === 1) {
                sortedItems = state.products.sort((a, b) => b.created_at?.localeCompare(a.created_at));
            } else if (sortBy === 2) {
                sortedItems = state.products.filter((p) => p.discount);
            } else if (sortBy === 3) {
                sortedItems = state.products.sort((a, b) => Number(a.price) - Number(b.price));
            } else if (sortBy === 4) {
                sortedItems = state.products.sort((a, b) => Number(b.price) - Number(a.price));
            }
            const filteredProducts = sortedItems?.filter((product) => {
                if (value[0] <= Number(product.price) && Number(product.price) <= value[1]) {
                    if (category && product.category_id !== category) {
                        return false;
                    }
                    return true;

                }
            });
            state.sortedProducts = filteredProducts;
        },
        resetProducts: (state, acrion) => {
            state.sortedProducts = state.products;
        },

    },

    extraReducers: {
        [fetchFilterProduct.fulfilled]: (state, action) => {
            const allProducts = action.payload.filter(p => p.status != 0);
            state.isSuccess = true;

            state.products = allProducts;
            state.sortedProducts = allProducts;

            const newProducts = allProducts?.sort((a, b) => a.created_at?.localeCompare(b.created_at)).slice(0, 10);
            const discountedProducts = allProducts?.filter((p) => p.discount).slice(0, 10);

            state.newProducts = newProducts;
            state.discountedProducts = discountedProducts;

        },
    },
});


export const selectFiltredProducts = state => state.filtredProduct;

export const {
    filterProducts,
    resetProducts,
} = filtredProductSlice.actions;

export default filtredProductSlice.reducer;
