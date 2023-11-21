import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contactFormData: {},
  loanFormData: {},
  historyFormData: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setContactFormData: (state, action) => {
      state.contactFormData = action.payload;
    },
    setLoanFormData: (state, action) => {
      state.loanFormData = action.payload;
    },
    setHistoryFormData: (state, action) => {
      state.historyFormData = action.payload;
    },
    resetForm: (state) => {
      state.contactFormData = {};
      state.loanFormData = {};
      state.historyFormData = {};
    },
  },
});

export const {
  setContactFormData,
  setLoanFormData,
  setHistoryFormData,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
