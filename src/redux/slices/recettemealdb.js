import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useStorage';

const initialState = {
  value: useLocalStorage("RECETTEMEALDB", [], "get")
  
}

export const recettemealdbSlice = createSlice({
  name: 'recettemealdb',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.value = [...state.value, action.payload];
    },
    updateLocalStorage: (state) => {
        useLocalStorage("RECETTEMEALDB", state.value, "set");
    },
  },
})



// Action creators are generated for each case reducer function
export const { setData, updateLocalStorage } = recettemealdbSlice.actions

export default recettemealdbSlice.reducer