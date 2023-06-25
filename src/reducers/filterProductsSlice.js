import {
    createEntityAdapter,
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
            let sortedItems;
            if (sortBy === 0) {
                sortedItems = state.products.sort((a, b) => a.created_at?.localeCompare(b.created_at));
            } else if (sortBy === 1) {
                sortedItems = state.products.filter((p) => p.discount);
            } else if (sortBy === 2) {
                sortedItems = state.products.sort((a, b) => a.price - b.price);
            } else if (sortBy === 3) {
                sortedItems = state.products.sort((a, b) => b.price - a.price);
            }
            const filteredProducts = sortedItems?.filter((product) => {
                if (value[0] <= product.price && product.price <= value[1]) {
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
            state.isSuccess = true;
            state.products = action.payload;
            state.sortedProducts = action.payload;

            const newProducts = action.payload?.sort((a, b) => a.created_at?.localeCompare(b.created_at)).slice(0, 10);
            const discountedProducts = action.payload?.filter((p) => p.discount).slice(0, 10);

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
