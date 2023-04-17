import { createSlice } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useStorage';

const initialState = {
  value: useLocalStorage("AREAS", null, "get")
  
}

export const areasSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.value = action.payload;
    },
    updateLocalStorage: (state) => {
        useLocalStorage("AREAS", state.value, "set");
    },
  },
})



// Action creators are generated for each case reducer function
export const { setData, updateLocalStorage } = areasSlice.actions

export default areasSlice.reducer