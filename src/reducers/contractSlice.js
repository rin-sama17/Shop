import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    createContract,
    getAllContracts,
    removeContract,
    updateContract,
} from './services';

const contractAdaptor = createEntityAdapter();
const initialState = contractAdaptor.getInitialState();

export const fetchContracts = createAsyncThunk(
    'contracts/fetchContracts',
    async () => {
        try {
            const res = await getAllContracts();
            return res.data.data;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addContract = createAsyncThunk(
    'contracts/addContract',
    async ({ values, setOpen }) => {
        try {
            const res = await createContract(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.contract;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editContract = createAsyncThunk(
    'contracts/editContract',
    async ({ values, setOpen }) => {
        try {
            const res = await updateContract(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.contract;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteContract = createAsyncThunk(
    'contracts/deleteContract',
    async (discountId) => {
        try {
            const res = await removeContract(discountId);
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

const contractSlice = createSlice({
    name: 'contracts',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchContracts.fulfilled]: contractAdaptor.setAll,
        [addContract.fulfilled]: contractAdaptor.addOne,
        [editContract.fulfilled]: contractAdaptor.setOne,
        [deleteContract.fulfilled]: contractAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllContracts,
    selectById: selectContractById,
} = contractAdaptor.getSelectors((state) => state.contract);


export default contractSlice.reducer;
