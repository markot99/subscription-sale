import { createSlice } from '@reduxjs/toolkit'
import { Subscription } from '../../../Models/Subscription'

/**
 * The state of the newly configured subscription.
 */
export interface SubscriptionState {
  /**
   * The created subscription.
   */
  subscription: Subscription
}

/**
 * The initial state of the authentication slice.
 */
const initialState = {} as SubscriptionState

/**
 * The subscription slice.
 */
const subscriptionSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clear(state) {
      state.subscription = {} as Subscription
    }
  }
})

/**
 * The reducer of the subscription slice.
 */
export default subscriptionSlice.reducer
