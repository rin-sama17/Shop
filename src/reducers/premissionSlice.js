import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
    createSelector,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllPremissions,
    createPremission,
    removePremission,
    updatePremission,
} from './services';

const premissionAdaptor = createEntityAdapter();
const initialState = premissionAdaptor.getInitialState({
    loading: false,
    access: false,
});

export const fetchPremissions = createAsyncThunk(
    'premission/fetchPremissions',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getAllPremissions();
            return res.data.premission;
        } catch (error) {
            console.error(error);
            if (error.response.status === 403) {
                return rejectWithValue(error.response.data);
            }
        }
    },
);

export const addPremission = createAsyncThunk(
    'premission/addPremission',
    async ({ values, setOpen, resetForm }) => {
        try {
            const res = await createPremission(values);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
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
    async ({ values, setOpen, resetForm }) => {
        try {
            console.log(values);
            const res = await updatePremission(values);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
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
        [fetchPremissions.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchPremissions.fulfilled]: (state, action) => {
            state.loading = false;
            state.access = true;
            premissionAdaptor.setAll(state, action.payload);
        },
        [fetchPremissions.rejected]: (state, action) => {
            state.loading = false;
            state.access = false;
        },
        [addPremission.fulfilled]: premissionAdaptor.addOne,
        [editPremission.fulfilled]: premissionAdaptor.setOne,
        [deletePremission.fulfilled]: premissionAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllPremissions,
    selectById: selectPremissionById,
    selectIds: selectPremissionIds
} = premissionAdaptor.getSelectors((state) => state.premission);


export const selectPremissionDetails = state => state.premission;

export default premissionSlice.reducer;
