import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userLogin } from './services';


const initialState = {
  userInfo: {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};


export const login = createAsyncThunk(
  'auth/login',
  async ({ values, setOpen, resetForm, navigate }) => {
    try {
      const res = await userLogin(values);

      if (res.status === 200) {
        setOpen(false);
        resetForm();
        toast.success(res.data.data.Message, { position: 'bottom-right' });
        navigate("/admin-panel");
        return res.data.data;
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
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.token;
      state.userInfo = payload.user;
      state.success = true;
      localStorage.setItem("token", payload.token);
    }
  },
});
export const { userLogout } = authSlice.actions;
export const selectAuth = state => state.auth;
export default authSlice.reducer;
