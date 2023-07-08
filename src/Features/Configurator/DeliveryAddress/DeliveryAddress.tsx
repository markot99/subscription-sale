import { Box, Grid, MenuItem, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { CountryApi } from '../../../Api/CountryApi'
import { Subscription } from '../../../Models/Subscription'
import { UserTitle } from '../../../Models/User'
import { setSubscription } from '../../../Store/Slices/SubscriptionSlice/SubscriptionSlice'
import { AppDispatch, RootState } from '../../../Store/Store'

function DeliveryAddress() {
  const { t } = useTranslation()
  const dispatch = useDispatch() as AppDispatch
  const subscription = useSelector<RootState, Subscription>((state) => state.subscription.subscription)

  const [countries, setCountries] = React.useState<string[]>([])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const fetchAvailableCountries = async () => {
    try {
      const availableCountries = await CountryApi.fetchAvailableCountries()
      setCountries(availableCountries)
    } catch (error) {
      console.log('Failed to get available countries')
    }
  }

  useEffect(() => {
    fetchAvailableCountries()
  }, [])

  function getEnumKey(enumObj: object, value: string): string | undefined {
    const keys = Object.keys(enumObj) as (keyof typeof enumObj)[]
    const matchingKey = keys.find((key) => enumObj[key] === value)
    return matchingKey ? enumObj[matchingKey] : undefined
  }

  return (
    <Box>
      <Typography variant='h4'>{t('delivery.address')}</Typography>
      <br />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4}>
            <TextField
              select
              fullWidth
              label={t('address.title')}
              value={subscription.deliveryAddress.title}
              error={!subscription.deliveryAddress.title}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      title: e.target.value
                    }
                  })
                )
              }
            >
              {Object.values(UserTitle).map((key) => (
                <MenuItem key={key} value={key}>
                  {t('title.' + getEnumKey(UserTitle, key))}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={t('address.firstName')}
              value={subscription.deliveryAddress.firstName}
              error={!subscription.deliveryAddress.firstName}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      firstName: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label={t('address.lastName')}
              value={subscription.deliveryAddress.lastName}
              error={!subscription.deliveryAddress.lastName}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      lastName: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label={t('address.street')}
              value={subscription.deliveryAddress.street}
              error={!subscription.deliveryAddress.street}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      street: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label={t('address.houseNumber')}
              value={subscription.deliveryAddress.houseNumber}
              error={!subscription.deliveryAddress.houseNumber}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      houseNumber: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label={t('address.postcode')}
              value={subscription.deliveryAddress.postalCode}
              error={!subscription.deliveryAddress.postalCode}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      postalCode: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              fullWidth
              label={t('address.city')}
              value={subscription.deliveryAddress.city}
              error={!subscription.deliveryAddress.city}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      city: e.target.value
                    }
                  })
                )
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              fullWidth
              label={t('address.country')}
              value={subscription.deliveryAddress.country}
              error={!subscription.deliveryAddress.country}
              onChange={(e) =>
                dispatch(
                  setSubscription({
                    ...subscription,
                    deliveryAddress: {
                      ...subscription.deliveryAddress,
                      country: e.target.value
                    }
                  })
                )
              }
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
export default DeliveryAddress
