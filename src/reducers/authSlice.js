import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { userLogin } from './services';


const initialState = {
  userInfo: {},
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  success: false

};


export const login = createAsyncThunk(
  'auth/login',
  async ({ values, setOpen, resetForm }) => {
    try {
      const res = await userLogin(values);
      if (res.status === 403) {
        setOpen(false);
        resetForm();
        toast.success(res.data.data.Message, { position: 'bottom-right' });
      }
      return res.data.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, { position: 'bottom-left' });
    }
  },
);



const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.token = payload.token;
      state.userInfo = payload.user;
      state.success = true;
      localStorage.setItem("token", payload.token);
    }
  },
});

export const selectAuth = state => state.auth;
export default authSlice.reducer;
