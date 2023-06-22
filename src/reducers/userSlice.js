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
} from './services';

const userAdaptor = createEntityAdapter();
const initialState = userAdaptor.getInitialState({
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
  async ({ values, setOpen, resetForm }) => {
    try {
      const res = await createUser(values);
      if (res.status === 200) {
        setOpen(false);
        resetForm();
        toast.success(res.data.message, { position: 'bottom-right' });
        return res.data.user;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
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
      console.log(error);
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
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    roleIdAdded: (state, action) => {
      state.roles.push(action.payload);
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
export const selectUserDetails = state => state.user;

export const { roleIdDeleted, roleIdAdded, roleIdsCleared, rolesIdFinded } = userSlice.actions;

export default userSlice.reducer;
