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
  async ({ values, setOpen, resetForm, navigate }) => {
    try {
      const res = await userLogin(values);

    } catch (error) {
      if (error.response.status === 403) {
        setOpen(false);
        resetForm();
        toast.success(error.response.data.data.Message, { position: 'bottom-right' });
        navigate("/admin-panel");
        return error.response.data.data;

      }
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
    [login.fulfilled]: (state, action) => {
      console.log(action);
      state.token = action.payload.token;
      state.userInfo = action.payload.user;
      state.success = true;
      localStorage.setItem("token", action.payload.token);
    }
  },
});

export const selectAuth = state => state.auth;
export default authSlice.reducer;
