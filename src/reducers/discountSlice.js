import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllDiscounts,
    createDiscount,
    removeDiscount,
    updateDiscount,
} from './services';

const discountAdaptor = createEntityAdapter();
const initialState = discountAdaptor.getInitialState();

export const fetchDiscounts = createAsyncThunk(
    'discount/fetchDiscounts',
    async () => {
        try {
            const res = await getAllDiscounts();
            return res.data.data;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addDiscount = createAsyncThunk(
    'discount/addDiscount',
    async ({ values, setOpen }) => {
        try {
            const res = await createDiscount(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.discount;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editDiscount = createAsyncThunk(
    'discount/editDiscount',
    async ({ values, setOpen }) => {
        try {
            const res = await updateDiscount(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.discount;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteDiscount = createAsyncThunk(
    'discount/deleteDiscount',
    async (discountId) => {
        try {
            const res = await removeDiscount(discountId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return discountId;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const discountSlice = createSlice({
    name: 'discount',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDiscounts.fulfilled]: discountAdaptor.setAll,
        [addDiscount.fulfilled]: discountAdaptor.addOne,
        [editDiscount.fulfilled]: discountAdaptor.setOne,
        [deleteDiscount.fulfilled]: discountAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllDiscounts,
    selectById: selectDiscountById,
} = discountAdaptor.getSelectors((state) => state.discount);


export default discountSlice.reducer;
