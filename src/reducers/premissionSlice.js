import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllPremissions,
    createPremission,
    removePremission,
    updatePremission,
} from './services';

const premissionAdaptor = createEntityAdapter();
const initialState = premissionAdaptor.getInitialState();

export const fetchPremissions = createAsyncThunk(
    'premission/fetchPremissions',
    async () => {
        try {
            const res = await getAllPremissions();
            return res.data.premission;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addPremission = createAsyncThunk(
    'premission/addPremission',
    async ({ values, setOpen }) => {
        try {
            const res = await createPremission(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.premission;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editPremission = createAsyncThunk(
    'premission/editPremission',
    async ({ values, setOpen }) => {
        try {
            const res = await updatePremission(values);
            if (res.status === 200) {
                setOpen(false);
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.premission;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deletePremission = createAsyncThunk(
    'premission/deletePremission',
    async (premissionId) => {
        try {
            const res = await removePremission(premissionId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return premissionId;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const premissionSlice = createSlice({
    name: 'premission',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPremissions.fulfilled]: premissionAdaptor.setAll,
        [addPremission.fulfilled]: premissionAdaptor.addOne,
        [editPremission.fulfilled]: premissionAdaptor.setOne,
        [deletePremission.fulfilled]: premissionAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllPremissions,
    selectById: selectPremissionById,
} = premissionAdaptor.getSelectors((state) => state.premission);


export default premissionSlice.reducer;
