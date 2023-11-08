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
      state.currentUser = action.payload;
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
      state.currentUser = action.payload;
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
    updateUserStart: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    signOutStart: (state) => {
      state.loading = true;
    },
    signOutSuccess: (state, action) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
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
