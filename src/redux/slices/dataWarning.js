import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useStorage';

const initialState = {
  value: useLocalStorage("DATAWARNING", true, "get")
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
      useLocalStorage("DATAWARNING", state.value, "set");
    },
  },
})

// Action creators are generated for each case reducer function
export const { turnOn, turnOff, updateLocalStorage } = dataWarningSlice.actions

export default dataWarningSlice.reducer