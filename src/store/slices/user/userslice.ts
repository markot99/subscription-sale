import { createSelector, createSlice } from '@reduxjs/toolkit'
import { User } from '../../../Models/User'
import { RootState } from '../../Store'

/**
 * The representation of the user state.
 */
export interface UserState {
  /**
   * Contains all registered users.
   */
  users: User[]
}

/**
 * The initial state of the user slice.
 */
const initialState = {
  users: [
    {
      id: '00cc1aa7-b9c6-4d8b-8634-56036f0470f8',
      firstName: 'Alpha',
      lastName: 'Dave',
      email: 'alpha.dave@admin.com',
      password: '0000',
      invoiceAddress: {
        street: 'Alpha Street',
        streetNumber: '1',
        location: 'Alpha City',
        zipCode: '0000',
        country: 'Alpha One'
      }
    }
  ]
} as UserState

/**
 * The user slice.
 */
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    storeUser(state: UserState, action: { payload: User }) {
      state.users.push(action.payload)
    },
    updateUser(state: UserState, action: { payload: User }) {
      const userId = action.payload.id
      const index = state.users.findIndex((user) => user.id === userId)

      state.users[index] = action.payload
    }
  }
})

/**
 * The actions of the user slice.
 */
export const { storeUser, updateUser } = userSlice.actions

/**
 * Selects all registered users.
 */
export const registeredUsers = createSelector(
  (state: RootState) => state.users,
  (state: UserState) => state.users
)

/**
 * The reducer of the user slice.
 */
export default userSlice.reducer
