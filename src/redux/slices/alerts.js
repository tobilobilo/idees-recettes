import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
  message: "",
  status: null,
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    displayAlert: (state, action) => {
      state.value = true;
      state.message = action.payload.message;
      state.status = action.payload.status;
    },
    removeAlert: (state) => {
      state.value = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { displayAlert, removeAlert } = alertSlice.actions

export default alertSlice.reducer