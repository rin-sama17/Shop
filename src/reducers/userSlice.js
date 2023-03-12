import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
  loading: false,
  userInfo: {
    name: "rin",

  },
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectUserInfo = state => state.user.userInfo;


export default userSlice.reducer;