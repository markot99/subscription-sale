import { createSelector, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../Models/User'
import { RootState } from '../../Store'

/**
 * The authentication state.
 */
export interface AuthState {
  /**
   * Indicates whether the user is authenticated or not.
   */
  isAuthenticated: boolean

  /**
   * The currently authenticated user.
   */
  user: User
}

/**
 * The initial state of the authentication slice.
 */
const initialState = {} as AuthState

/**
 * The authentication slice.
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate(state, action: { payload: User }) {
      state.isAuthenticated = true
      state.user = action.payload
    },
    deauthenticate(state: AuthState) {
      state.isAuthenticated = false
      state.user = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        invoiceAddress: {
          street: '',
          streetNumber: '',
          zipCode: '',
          location: '',
          country: ''
        }
      }
    }
  }
})

/**
 * The actions of the authentication slice.
 */
export const { authenticate, deauthenticate } = authSlice.actions

/**
 * Selects whether the user is authenticated or not.
 */
export const isAuthenticated = createSelector(
  (state: RootState) => state.auth,
  (state: AuthState) => state.isAuthenticated
)

/**
 * Selects the currently authenticated user.
 */
export const authenticatedUser = createSelector(
  (state: RootState) => state.auth,
  (state: AuthState) => state.user
)

/**
 * The reducer of the authentication slice.
 */
export default authSlice.reducer
