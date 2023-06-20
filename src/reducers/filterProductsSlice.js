import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    products: [],
    sortedProducts: [],
    isSuccess: false
};

export const fetchFilterProduct = createAsyncThunk(
    'filterProduct/fetchProducts',
    async () => {
        try {
            const url = "http://localhost:8000/api/products";
            const res = await axios.get(url);
            console.log("res: aaaaaaaaaa", res);
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
        sortItems: (state, action) => {
            const sortBy = action.payload;
            let sortedItems;
            if (sortBy === 0) {
                console.log("state.products: aaaaaaaaaa", state.products);

                sortedItems = state.products.sort((a, b) => a.created_at.localeCompare(b.created_at));
            } else if (sortBy === 1) {
                sortedItems = state.products.filter((product) => product.discount);
            } else if (sortBy === 2) {
                sortedItems = state.products.sort((a, b) => a.price - b.price);
            } else if (sortBy === 3) {
                sortedItems = state.products.sort((a, b) => b.price - a.price);
            }
            state.sortedProducts = sortedItems;
        },

        filterProducts: (state, action) => {
            const { category, value } = action.payload;
            const filteredProducts = state.products.filter((product) => {
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

        },
    },
});


export const selectFiltredProducts = state => state.filtredProduct;

export const {
    sortItems,
    filterProducts,
    resetProducts,
} = filtredProductSlice.actions;

export default filtredProductSlice.reducer;
