import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useStorage';

const initialState = {
  value: useLocalStorage("RECETTEMEALDB", [], "get")
  
}

export const recettemealdbSlice = createSlice({
  name: 'recettemealdb',
  initialState,
  reducers: {
    addData: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    clearData: (state) => {
      state.value = [];
    },
    updateLocalStorage: (state) => {
        useLocalStorage("RECETTEMEALDB", state.value, "set");
    },
  },
})



// Action creators are generated for each case reducer function
export const { addData, clearData, updateLocalStorage } = recettemealdbSlice.actions

export default recettemealdbSlice.reducer