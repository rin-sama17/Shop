import { createSlice, nanoid } from '@reduxjs/toolkit';

import { useCookies } from 'react-cookie';

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    signedIn: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(fullName, phone, pwd) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            fullName,
            phone,
            pwd
          },
        };
      },
    },
  }
});

export const selectUserInfo = state => state.user.userInfo;

export const { signedIn } = userSlice.actions;

export default userSlice.reducer;