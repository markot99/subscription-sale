import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
import { Api } from '../../../Api/Api'
import { NewsApi } from '../../../Api/NewsApi'
import { AlertSeverity } from '../../../Models/Alert'
import { DeliveryMethod, PaymentInterval, PaymentType, Subscription, SubscriptionInterval } from '../../../Models/Subscription'
import i18n from '../../../i18n'
import { RootState } from '../../Store'
import { setAlert } from '../AlertSlice/AlertSlice'

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
    newspaper: '',
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
        newspaper: action.payload
      }
    }
  },
  extraReducers: (builder) => {
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
    builder.addCase(confirmSubscription.rejected, (state, action) => {
      console.log(action.error.message)
    })
    builder.addCase(confirmSubscription.fulfilled, (state, action) => {
      state.subscription = action.payload
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
export const refreshPrice = createAsyncThunk('subscription/refreshPrice', async (subscription: Subscription, { dispatch }) => {
  if (subscriptionIsValid(subscription)) {
    try {
      const price = await NewsApi.calculateNewspaperPrice(
        subscription.deliveryAddress.postalCode,
        subscription.deliveryAddress.country,
        subscription.newspaper,
        subscription.subscriptionInterval,
        subscription.deliveryMethod,
        subscription.paymentInterval
      )
      return price
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('Zip code does not exist')) {
          await dispatch(setAlert({ message: i18n.t('delivery.errors.unknownZip'), severity: AlertSeverity.Error, timeout: 5 }))
        }
        throw error
      }
    }
  }
  return 0
})

/**
 * Confirm new subscription
 */
export const confirmSubscription = createAsyncThunk('subscription/confirmSubscription', async (subscription: Subscription) => {
  const createdSubscription = await Api.createSubscription(subscription)
  return createdSubscription
})

export const cachedSubscription = createSelector(
  (state: RootState) => state.subscription,
  (state: SubscriptionState) => state.subscription
)

/**
 * The reducer of the subscription slice.
 */
export default subscriptionSlice.reducer
