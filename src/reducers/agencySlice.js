import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    createAgency,
    getAllAgencies,
    removeAgency,
    updateAgency,
    convertToForm
} from './services';

const agencyAdaptor = createEntityAdapter();
const initialState = agencyAdaptor.getInitialState({
    loading: false
});

export const fetchAgencies = createAsyncThunk(
    'agencys/fetchAgencies',
    async () => {
        try {
            const res = await getAllAgencies();
            return res.data.agencies;
        } catch (error) {
            console.error(error);
        }
    },
);

export const addAgency = createAsyncThunk(
    'agencys/addAgency',
    async ({ values, setOpen, resetForm }) => {
        const formData = convertToForm(values);
        try {


            const res = await createAgency(formData);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.data.message, { position: 'bottom-right' });
                return res.data.data.agency;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const editAgency = createAsyncThunk(
    'agencys/editAgency',
    async ({ values, setOpen, resetForm }) => {
        const formData = convertToForm(values);
        try {
            const res = await updateAgency(formData, values.id);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.agency;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteAgency = createAsyncThunk(
    'agencys/deleteAgency',
    async (discountId) => {
        try {
            const res = await removeAgency(discountId);
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

const agencySlice = createSlice({
    name: 'agencys',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAgencies.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchAgencies.fulfilled]: (state, action) => {
            state.loading = false;
            agencyAdaptor.setAll(state, action.payload);
        },
        [addAgency.fulfilled]: agencyAdaptor.addOne,
        [editAgency.fulfilled]: agencyAdaptor.setOne,
        [deleteAgency.fulfilled]: agencyAdaptor.removeOne,
    },
});

export const {
    selectAll: selectAllAgencies,
    selectById: selectAgencyById,
} = agencyAdaptor.getSelectors((state) => state.agency);

export const selectAgencyLoading = state => state.agency.loading;

export default agencySlice.reducer;
