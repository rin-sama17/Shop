import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  getAllUsers,
  createUser,
  removeUser,
  updateUser,
  handleErrors,
} from './services';

const userAdaptor = createEntityAdapter();
const initialState = userAdaptor.getInitialState({
  premission_id: [],
  roles: [],
  access: false,
  loading: false,
});

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllUsers();
      return res.data.data[0];
    } catch (error) {
      console.error(error);
      if (error.response.status === 403) {
        return rejectWithValue(error.response.data);
      }
    }
  },
);

export const addUser = createAsyncThunk(
  'user/addUser',
  async ({ values, setOpen, resetForm, setErrors }) => {
    try {
      const res = await createUser(values);
      if (res.status === 200) {
        setOpen(false);
        resetForm();
        toast.success(res.data.message, { position: 'bottom-right' });
        return res.data.user;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
      handleErrors(error, setErrors);
    }
  },
);

export const editUser = createAsyncThunk(
  'user/editUser',
  async ({ values, setOpen, resetForm }) => {
    try {
      const res = await updateUser(values);
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

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async (userId) => {
    try {
      const res = await removeUser(userId);
      if (res.status === 200) {
        toast.success(res.data.message, { position: 'bottom-right' });
        return userId;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);

const userSlice = createSlice({
  name: 'user',
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
      const userPremissions = action.payload;
      const premissionIds = userPremissions?.map(premission => premission.id);
      if (premissionIds) {
        state.premission_id = premissionIds;
      }

    },
    roleIdAdded: (state, action) => {
      state.roles.push(action.payload);
    },
    roleIdsAdded: (state, action) => {
      state.roles = action.payload;
    },
    roleIdDeleted: (state, action) => {
      const roleIndex = state.roles.findIndex(p => p === action.payload);
      state.roles.splice(roleIndex, 1);
    },
    roleIdsCleared: (state, action) => {
      state.roles.splice(0, state.roles.length);
    },
    rolesIdFinded: (state, action) => {
      const userRoles = action.payload;
      const roleIds = userRoles?.map(role => role.id);
      if (roleIds) {
        state.roles = roleIds;
      }
    }
  },
  extraReducers: {
    [fetchUsers.pending]: state => { state.loading = true; },
    [fetchUsers.fulfilled]: (state, action) => {
      state.access = true;
      state.loading = false;
      userAdaptor.setAll(state, action.payload);
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.access = false;
    },
    [addUser.fulfilled]: userAdaptor.addOne,
    [editUser.fulfilled]: userAdaptor.setOne,
    [deleteUser.fulfilled]: userAdaptor.removeOne,
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = userAdaptor.getSelectors((state) => state.user);

export const selectRoleIds = state => state.user.roles;
export const selectPremission_id = state => state.user.premission_id;

export const selectUserDetails = state => state.user;

export const { premissionIdDeleted, premissionIdAdded, premissionIdsAdded, premissionIdsCleared, premissionsIdFinded, roleIdDeleted, roleIdAdded, roleIdsAdded, roleIdsCleared, rolesIdFinded } = userSlice.actions;

export default userSlice.reducer;
