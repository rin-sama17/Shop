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
const initialState = userAdaptor.getInitialState();

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    try {
      const res = await getAllUsers();
      return res.data.data[0];
    } catch (error) {
      console.error(error);
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
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: userAdaptor.setAll,
    [addUser.fulfilled]: userAdaptor.addOne,
    [editUser.fulfilled]: userAdaptor.setOne,
    [deleteUser.fulfilled]: userAdaptor.removeOne,
  },
});

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
} = userAdaptor.getSelectors((state) => state.user);


export default userSlice.reducer;
