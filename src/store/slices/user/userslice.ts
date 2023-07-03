import { createSelector, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../models/User'

export interface UserState {
  user: User
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState = {
  user: {
    firstName: '',
    lastName: '',
    email: ''
  },
  status: 'idle',
  error: null
} as UserState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action: { payload: User }) {
      state.user = action.payload
    },
    logoutUser(state) {
      state.user = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  extraReducers: (builder) => {
    builder
  }
})

export const { loginUser, logoutUser } = userSlice.actions

// check if user is logged in by checking if the user email, first name and last name are not empty
export const isLoggedIn = createSelector(
  (state: UserState) => state.user,
  (user) => !!user.email && !!user.firstName && !!user.lastName
)

export default userSlice.reducer
