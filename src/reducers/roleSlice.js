import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
    getAllRoles,
    createRole,
    removeRole,
    updateRole,
    handleErrors
} from './services';

const roleAdaptor = createEntityAdapter();
const initialState = roleAdaptor.getInitialState({
    premission_id: [],
    loading: false,
    access: false,
});

export const fetchRoles = createAsyncThunk(
    'role/fetchRoles',
    async (_, { rejectWithValue }) => {
        try {
            const res = await getAllRoles();
            return res.data.data[0];
        } catch (error) {
            console.error(error);
            if (error.response.status === 403) {
                return rejectWithValue(error.response.data);
            }
        }
    },
);

export const addRole = createAsyncThunk(
    'role/addRole',
    async ({ values, setOpen, resetForm, setErrors }) => {
        try {
            const res = await createRole(values);
            if (res.status === 200) {
                setOpen(false);
                resetForm();
                toast.success(res.data.message, { position: 'bottom-right' });

                return res.data.role;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
            handleErrors(error, setErrors);
        }
    },
);

export const editRole = createAsyncThunk(
    'role/editRole',
    async ({ values, setOpen, resetForm }) => {
        try {
            const res = await updateRole(values);
            if (res.status === 200) {
                if (setOpen && resetForm) {
                    setOpen(false);
                    resetForm();
                }
                toast.success(res.data.message, { position: 'bottom-right' });
                return res.data.role;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

export const deleteRole = createAsyncThunk(
    'role/deleteRole',
    async (roleId) => {
        try {
            const res = await removeRole(roleId);
            if (res.status === 200) {
                toast.success(res.data.message, { position: 'bottom-right' });
                return roleId;
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message, { position: 'bottom-left' });
        }
    },
);

const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        premissionIdAdded: (state, action) => {
            state.premission_id.push(action.payload);

        },
        premissionIdsAdded: (state, action) => {
            state.premission_id = action.payload;
        },
        premissionIdDeleted: (state, action) => {
            const premissionIndex = state.premission_id.findIndex(p => p === action.payload);
            state.premission_id.splice(premissionIndex, 1);
        },
        premissionIdsCleared: (state, action) => {
            state.premission_id.splice(0, state.premission_id.length);
        },
        premissionsIdFinded: (state, action) => {
            const rolePremissions = action.payload;
            const premissionIds = rolePremissions?.map(premission => premission.id);
            if (premissionIds) {
                state.premission_id = premissionIds;
            }

        }
    },

    extraReducers: {
        [fetchRoles.pending]: state => { state.loading = true; },
        [fetchRoles.fulfilled]: (state, action) => {
            state.loading = false;
            state.access = true;
            roleAdaptor.setAll(state, action.payload);
        },
        [fetchRoles.rejected]: (state, action) => {
            state.loading = false;
            state.access = false;
        },
        [addRole.fulfilled]: roleAdaptor.addOne,
        [editRole.fulfilled]: roleAdaptor.setOne,
        [deleteRole.fulfilled]: roleAdaptor.removeOne,
    }
});

export const {
    selectAll: selectAllRoles,
    selectById: selectRoleById,
} = roleAdaptor.getSelectors((state) => state.role);


export const selectRoleDetails = state => state.role;

export const selectPremission_id = state => state.role.premission_id;
export const { premissionIdDeleted, premissionIdAdded, premissionIdsCleared, premissionsIdFinded, premissionIdsAdded } = roleSlice.actions;
export default roleSlice.reducer;
