import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectUserInfo = state => state.user.userInfo;


export default userSlice.reducer;