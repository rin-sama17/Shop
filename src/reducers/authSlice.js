import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userLogin, getUserInfo, updateUser, userLogout } from './services';


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
  async ({ values, setOpen, resetForm, navigate }) => {
    console.log(values);
    try {
      const res = await userLogin(values);
      if (res.status === 200) {
        setOpen(false);
        resetForm();
        const userData = res.data.data;
        toast.success(userData.message, { position: 'bottom-right' });
        return { userData, navigate };
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);


export const logout = createAsyncThunk(
  'auth/logout',
  async (navigate) => {
    try {
      const res = await userLogout();

      if (res.status === 200) {
        navigate("/");
        toast.success(res.data.message, { position: 'bottom-right' });

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

  },
  extraReducers: {

    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.userData.token;
      state.userInfo = payload.userData.user;
      state.success = true;
      state.loading = false;
      localStorage.setItem("token", payload.userData.token);
      payload.navigate("/admin-panel");
      window.location.reload(false);
    },
    [login.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserInfo.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.loading = false;
    },
    [editUserInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
    },
    [logout.fulfilled]: (state, action) => {
      state.token = null;
      state.userInfo = {};
      state.success = false;
      localStorage.removeItem("token");
    }
  },
});
export const selectAuth = state => state.auth;
export default authSlice.reducer;
