import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { NewsApi } from '../../../Api/NewsApi'
import { LocalEdition } from '../../../Api/NewsData'
import { AlertSeverity } from '../../../Models/Alert'
import { DeliveryMethod, PaymentInterval, Subscription, SubscriptionInterval } from '../../../Models/Subscription'
import { setAlert } from '../../../Store/Slices/AlertSlice/AlertSlice'
import { setSubscription } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../../Store/Store'
import Price from '../Price/Price'

function Delivery() {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch

  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)
  const [localPaperEditions, setLocalPaperEditions] = React.useState<LocalEdition[]>([])

  const handleDateChange = (date: moment.Moment | null) => {
    if (date === null) return
    dispatch(
      setSubscription({
        ...subscription,
        startDay: date.format('YYYY-MM-DD')
      })
    )
  }

  const getDisabledDates = (date: moment.Moment) => {
    if (subscription.subscriptionInterval == SubscriptionInterval.Weekends) {
      return !(date.isoWeekday() === 6 || date.isoWeekday() === 7)
    } else if (subscription.subscriptionInterval == SubscriptionInterval.Daily) {
      return !(date.isoWeekday() >= 1 && date.isoWeekday() <= 7)
    } else {
      return true
    }
  }

  const refreshLocalEditions = async () => {
    try {
      const localEditions = await NewsApi.fetchLocalPaperVersionsForZipCode(subscription.deliveryAddress.postalCode)
      setLocalPaperEditions(localEditions)
    } catch (error) {
      console.log('Failed to refresh local editions')
    }
  }

  useEffect(() => {
    console.log('plz changed')
    refreshLocalEditions()
  }, [subscription.deliveryAddress.postalCode])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const handleEmptyEditionClick = () => {
    if (localPaperEditions.length === 0) {
      dispatch(setAlert({ message: t('delivery.errors.setZipFirst'), severity: AlertSeverity.Warning, timeout: 3 }))
    }
  }

  function getEnumKey(enumObj: object, value: string): string | undefined {
    const keys = Object.keys(enumObj) as (keyof typeof enumObj)[]
    const matchingKey = keys.find((key) => enumObj[key] === value)
    return matchingKey ? enumObj[matchingKey] : undefined
  }

  return (
    <Box>
      <Typography variant='h4'>{t('delivery.title')}</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.edition')}
              value={subscription.edition}
              error={!subscription.edition}
              onFocus={handleEmptyEditionClick}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    edition: e.target.value as string
                  })
                )
              }
            >
              {localPaperEditions.map((edition) => (
                <MenuItem key={edition.id} value={edition.id}>
                  {edition.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryDays.title')}
              value={subscription.subscriptionInterval}
              error={!subscription.subscriptionInterval}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    subscriptionInterval: e.target.value as SubscriptionInterval
                  })
                )
              }
            >
              {Object.values(SubscriptionInterval).map((key) => (
                <MenuItem key={key} value={key}>
                  {t('delivery.deliveryDays.' + getEnumKey(SubscriptionInterval, key))}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.deliveryMethod.title')}
              value={subscription.deliveryMethod}
              error={!subscription.deliveryMethod}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryMethod: e.target.value as DeliveryMethod
                  })
                )
              }
            >
              {Object.values(DeliveryMethod).map((key) => (
                <MenuItem key={key} value={key}>
                  {t('delivery.deliveryMethod.' + getEnumKey(DeliveryMethod, key))}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('delivery.paymentInterval.title')}
              value={subscription.paymentInterval}
              error={!subscription.paymentInterval}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    paymentInterval: e.target.value as PaymentInterval
                  })
                )
              }
            >
              {Object.values(PaymentInterval).map((key) => (
                <MenuItem key={key} value={key}>
                  {t('delivery.paymentInterval.' + getEnumKey(PaymentInterval, key))}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='de'>
              <DatePicker
                value={moment(subscription.startDay, 'YYYY-MM-DD')}
                onChange={handleDateChange}
                shouldDisableDate={getDisabledDates}
                minDate={moment().add(1, 'days')}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Price />
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
export default Delivery
