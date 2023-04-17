import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useStorage';

const initialState = {
  value: useLocalStorage("CATEGORIES", null, "get")
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.value = action.payload;
    },
    updateLocalStorage: (state) => {
        useLocalStorage("CATEGORIES", state.value, "set");
    },
  },
})

// Action creators are generated for each case reducer function
export const { setData, updateLocalStorage } = categoriesSlice.actions

export default categoriesSlice.reducer