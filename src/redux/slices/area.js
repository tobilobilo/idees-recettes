import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: (localStorage.getItem("AREA")) ? JSON.parse(localStorage.getItem("AREA")) : null,
}

export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.value = action.payload;
    },
    updateLocalStorage: (state) => {
        localStorage.setItem("AREA", JSON.stringify(state.value));
    },
  },
})

// Action creators are generated for each case reducer function
export const { getData, setData, updateLocalStorage } = areaSlice.actions

export default areaSlice.reducer