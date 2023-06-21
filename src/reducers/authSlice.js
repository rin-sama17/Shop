import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userLogin, getUserInfo, updateUser } from './services';


const initialState = {
  userInfo: {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  success: false,
  loading: false
};

export const fetchUserInfo = createAsyncThunk(
  'auth/fetchUserInfo',
  async () => {
    try {
      const res = await getUserInfo();
      if (res.status === 200) {
        return res.data.user;
      }
    } catch (error) {
      console.log(error);

    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ values, setOpen, resetForm }) => {
    try {
      const res = await userLogin(values);

      if (res.status === 200) {
        setOpen(false);
        resetForm();
        toast.success(res.data.data.message, { position: 'bottom-right' });
        return res.data.data;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);

export const editUserInfo = createAsyncThunk(
  'auth/editUserInfo',
  async ({ values, resetForm }) => {
    try {
      const res = await updateUser(values);
      if (res.status === 200) {
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

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem("token");
      state.userInfo = {};
      state.token = null;
      state.success = false;
    }
  },
  extraReducers: {

    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.userInfo = payload.user;
      state.success = true;
      localStorage.setItem("token", payload.token);
    },
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;

    }
  },
});
export const { userLogout } = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
