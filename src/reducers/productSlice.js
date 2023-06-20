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
} from './services';

const productAdaptor = createEntityAdapter();
const initialState = productAdaptor.getInitialState();

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        try {
            const res = await getAllProducts();
            return res.data.data[0];
        } catch (error) {
            console.error(error);
        }
    },
);

export const addProduct = createAsyncThunk(
    'product/addProduct',
    async ({ values, setOpen, resetForm }) => {
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
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editProduct = createAsyncThunk(
    'product/editProduct',
    async ({ values, setOpen, resetForm }) => {

        const formData = convertToForm(values);
        console.log(formData)
        try {
            const res = await updateProduct(formData, values.id);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.post;
            }
        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
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
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled]: productAdaptor.setAll,
        [addProduct.fulfilled]: productAdaptor.addOne,
        [editProduct.fulfilled]: productAdaptor.setOne,
        [deleteProduct.fulfilled]: productAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllProducts,
    selectById: selectProductById,
} = productAdaptor.getSelectors((state) => state.product);


export default productSlice.reducer;
