import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isloading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isloading = true;
    },
    loginSuccess: (state, action) => {
      state.isloading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isloading = false;
      state.isError = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isloading = false;
      state.isError = false;
    },
    updateSuccess: (state, action) => {
      state.isloading = false;
      state.currentUser = { ...state.currentUser, payload: action.payload };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateSuccess } =
  userSlice.actions;

export default userSlice.reducer;
