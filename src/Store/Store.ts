import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './Slices/Auth/AuthSlice'
import LocalPaperVersionReducer from './Slices/LocalPaperVersion/LocalPaperVersionSlice'
import UserReducer from './Slices/User/UserSlice'

export const store = configureStore({
  reducer: {
    users: UserReducer,
    auth: AuthReducer,
    papers: LocalPaperVersionReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
