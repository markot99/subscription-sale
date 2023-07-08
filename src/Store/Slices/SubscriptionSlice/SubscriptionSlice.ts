import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { NewsApi } from '../../../Api/NewsApi'
import { DeliveryMethod, PaymentInterval, PaymentType, Subscription, SubscriptionInterval } from '../../../Models/Subscription'
import { RootState } from '../../Store'

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
const initialState: SubscriptionState = {
  subscription: {
    id: '',
    newspaperID: '',
    userId: '',
    edition: '',
    deliveryAddress: {
      title: '',
      firstName: '',
      lastName: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      country: ''
    },
    invoiceAddress: {
      title: '',
      firstName: '',
      lastName: '',
      street: '',
      houseNumber: '',
      postalCode: '',
      city: '',
      country: ''
    },
    subscriptionInterval: SubscriptionInterval.Daily,
    deliveryMethod: DeliveryMethod.Post,
    paymentType: PaymentType.CreditCard,
    paymentInterval: PaymentInterval.Annual,
    startDay: moment().add(1, 'days').format('YYYY-MM-DD'),
    price: 0
  }
}

/**
 * The subscription slice.
 */
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    clearSubscription(state) {
      state.subscription = initialState.subscription
    },
    newSubscription(state, action: { payload: string }) {
      state.subscription = {
        ...initialState.subscription,
        newspaperID: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(refreshPrice.rejected, (state, action) => {
      console.log(action.error.message)
    })
    builder.addCase(refreshPrice.fulfilled, (state, action) => {
      state.subscription.price = action.payload
    })
    builder.addCase(setSubscription.rejected, (state, action) => {
      console.log(action.error.message)
    })
    builder.addCase(setSubscription.fulfilled, (state, action) => {
      state.subscription = action.payload
      state.subscription.price = 0
    })
  }
})

/**
 * The actions of the subscription slice.
 */
export const { clearSubscription, newSubscription } = subscriptionSlice.actions

/**
 * Check if the subscription is valid.
 */
export const subscriptionIsValid = (subscription: Subscription) => {
  if (!subscription.edition) return false
  if (!subscription.deliveryAddress.title) return false
  if (!subscription.deliveryAddress.firstName) return false
  if (!subscription.deliveryAddress.lastName) return false
  if (!subscription.deliveryAddress.street) return false
  if (!subscription.deliveryAddress.houseNumber) return false
  if (!subscription.deliveryAddress.postalCode) return false
  if (!subscription.deliveryAddress.city) return false
  if (!subscription.deliveryAddress.country) return false
  if (!subscription.subscriptionInterval) return false
  if (!subscription.deliveryMethod) return false
  if (!subscription.paymentInterval) return false
  if (!subscription.startDay) return false
  return true
}

/**
 * Selector to check if the subscription is valid.
 */
export const subscriptionPriceIsSet = createSelector(
  (state: RootState) => state.subscription.subscription,
  (subscription) => {
    return subscription.price > 0
  }
)

/**
 * Sets the new subscription data
 */
export const setSubscription = createAsyncThunk('subscription/setSubscription', async (subscription: Subscription, { dispatch }) => {
  dispatch(refreshPrice(subscription))
  return subscription
})

/**
 * Fetches all local paper versions from the server.
 */
export const refreshPrice = createAsyncThunk('subscription/refreshPrice', async (subscription: Subscription) => {
  if (subscriptionIsValid(subscription)) {
    const price = await NewsApi.calculateNewspaperPrice(
      subscription.deliveryAddress.postalCode,
      subscription.deliveryAddress.country,
      subscription.newspaperID,
      subscription.subscriptionInterval,
      subscription.deliveryMethod,
      subscription.paymentInterval
    )
    return price
  }
  return 0
})

/**
 * The reducer of the subscription slice.
 */
export default subscriptionSlice.reducer
