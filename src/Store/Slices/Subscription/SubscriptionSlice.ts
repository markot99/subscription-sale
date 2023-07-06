import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { readAllAbos } from '../../../api/Api'
import { Subscription } from '../../../Models/Subscription'

export interface SubscriptionState {
  subscriptions: Subscription[]
}

const initialState = {} as SubscriptionState

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {}
  // extraReducers: (builder) => {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   // builder.addCase(fetchSubscriptions.fulfilled, (state, action) => {
  //   //   // TODO:
  //   // })
  // }
})

// export const {} = subscriptionSlice.actions

export const fetchSubscriptions = createAsyncThunk('subscription/fetchSubscriptions', async () => {
  const subscriptions = await readAllAbos()
  console.warn('subscriptions', subscriptions)
  return false
})

export default subscriptionSlice.reducer
