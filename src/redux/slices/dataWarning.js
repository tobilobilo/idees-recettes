import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: (localStorage.getItem("DATAWARNING")) ? JSON.parse(localStorage.getItem("DATAWARNING")) : true,
}

export const dataWarningSlice = createSlice({
  name: 'dataWarning',
  initialState,
  reducers: {
    turnOff: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false;
    },
    turnOn: (state) => {
      state.value = true;
    },
    updateLocalStorage: (state, action) => {
      localStorage.setItem("DATAWARNING", JSON.stringify(state.value));
    },
  },
})

// Action creators are generated for each case reducer function
export const { turnOn, turnOff, updateLocalStorage } = dataWarningSlice.actions

export default dataWarningSlice.reducer