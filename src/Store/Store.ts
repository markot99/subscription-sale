import { configureStore } from '@reduxjs/toolkit'
import AlertReducer from './Slices/AlertSlice/AlertSlice'
import AuthReducer from './Slices/Auth/AuthSlice'
import LocalPaperVersionReducer from './Slices/LocalPaperVersion/LocalPaperVersionSlice'
import SubscriptionReducer from './Slices/SubscriptionSlice/SubscriptionSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    papers: LocalPaperVersionReducer,
    alert: AlertReducer,
    subscription: SubscriptionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
