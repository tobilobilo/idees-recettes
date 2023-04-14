import { configureStore } from '@reduxjs/toolkit'
import dataWarningReducer from './slices/dataWarning'
import alertReducer from './slices/alerts'
import areaReducer from './slices/area'

export const store = configureStore({
  reducer: {
    dataWarning: dataWarningReducer,
    alert: alertReducer,
    area: areaReducer,
  },
})