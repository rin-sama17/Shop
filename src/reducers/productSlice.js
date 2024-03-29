import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllProducts,
    createProduct,
    removeProduct,
    updateProduct,
    convertToForm,
    handleErrors,
} from './services';

const productAdaptor = createEntityAdapter();
const initialState = productAdaptor.getInitialState({
    loading: false,
    access: false,
});

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getAllProducts();
            return res.data.data[0];
        } catch (error) {
            console.error(error);
            if (error.response.status === 403) {
                return rejectWithValue(error.response.data);
            }
        }
    },
);

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async ({ values, setOpen, resetForm, setErrors }) => {
        const formData = convertToForm(values);
        try {
            const res = await createProduct(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.product;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
            handleErrors(error, setErrors);
        }
    },
);

export const editProduct = createAsyncThunk(
    'product/editProduct',
    async ({ values, setOpen, resetForm }) => {

        const formData = convertToForm(values);
        try {
            const res = await updateProduct(formData, values.id);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.product;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteProduct = createAsyncThunk(
    'product/deleteProduct',
    async (productId) => {
        try {
            const res = await removeProduct(productId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return productId;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: state => { state.loading = true; },
        [fetchProducts.fulfilled]: (state, action) => {
            state.access = true;
            state.loading = false;
            productAdaptor.setAll(state, action.payload);
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false;
            state.access = false;
        },
        [addProduct.fulfilled]: productAdaptor.addOne,
        [editProduct.fulfilled]: productAdaptor.setOne,
        [deleteProduct.fulfilled]: productAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
} = productAdaptor.getSelectors((state) => state.product);

export const selectProductDetails = state => state.product;

export default productSlice.reducer;
