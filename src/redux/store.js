import { configureStore } from '@reduxjs/toolkit'
import dataWarningReducer from './slices/dataWarning'
import alertReducer from './slices/alerts'
import areasReducer from './slices/areas'
import categoriesReducer from './slices/categories'

export const store = configureStore({
  reducer: {
    dataWarning: dataWarningReducer,
    alert: alertReducer,
    areas: areasReducer,
    categories: categoriesReducer,
  },
})