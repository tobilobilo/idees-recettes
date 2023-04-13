import { configureStore } from '@reduxjs/toolkit'
import dataWarningReducer from './slices/dataWarning'

export const store = configureStore({
  reducer: {
    dataWarning: dataWarningReducer,
  },
})