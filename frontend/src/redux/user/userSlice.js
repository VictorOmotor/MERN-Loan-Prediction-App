import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  loggedIn: false,
  error: null,
  success: false,
  loading: false,
  reload: false,
  resendError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.loading = false;
      state.reload = false;
      state.resendError = null;
      state.success = false;
    },
    signUpIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpIdSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.loggedIn = false;
    },
    signUpIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },
    resignUpIdStart: (state) => {
      state.reload = true;
      state.resendError = null;
      state.success = false;
    },
    resignUpIdSuccess: (state, action) => {
      state.reload = false;
      state.resendError = null;
      state.success = true;
      state.loggedIn = false;
    },
    resignUpIdFailure: (state, action) => {
      state.resendError = action.payload;
      state.reload = false;
      state.success = false;
    },
    loginInUserStart: (state) => {
      state.loading = true;
      state.error = null;
      state.loggedIn = false;
    },
    loginInUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
      state.loggedIn = true;
    },
    loginInUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.success = false;
    },
    logOutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logOutSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
      state.loggedIn = false;
      state.success = false;
      state.reload = false;
      state.resendError = null;
    },
  },
});

export const {
  signUpIdStart,
  signUpIdSuccess,
  signUpIdFailure,
  resignUpIdStart,
  resignUpIdSuccess,
  resignUpIdFailure,
  resetAuth,
  loginInUserStart,
  loginInUserSuccess,
  loginInUserFailure,
  logOutStart,
  logOutSuccess,
  // updateUserStart,
  // updateUserSuccess,
  // updateUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
  // signOutStart,
  // signOutSuccess,
  // signOutFailure,
} = userSlice.actions;

export default userSlice.reducer;
