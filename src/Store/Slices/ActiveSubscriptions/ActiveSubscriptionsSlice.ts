import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

import { Api } from '../../../Api/Api'
import { Subscription } from '../../../Models/Subscription'
import { User } from '../../../Models/User'
import { RootState } from '../../Store'

export interface ActiveSubscriptionsState {
  subscriptions: Subscription[]
}

const initialState = {
  subscriptions: []
} as ActiveSubscriptionsState

const activeSubscriptionsSlice = createSlice({
  name: 'activeSubscriptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActiveSubscriptions.fulfilled, (state, action) => {
      for (const subscription of action.payload) {
        const exists = state.subscriptions.find((s) => s.id === subscription.id)

        if (exists) {
          continue
        }

        state.subscriptions.push(subscription)
      }
    })
  }
})

export const fetchActiveSubscriptions = createAsyncThunk('activeSubscriptions/fetchActiveSubscriptions', async (user: User) => {
  return await Api.readSubscriptionsByUserId(user.id)
})

export const activeSubscriptions = createSelector(
  (state: RootState) => state.activeSubscriptions,
  (state: ActiveSubscriptionsState) => state.subscriptions
)

export default activeSubscriptionsSlice.reducer
